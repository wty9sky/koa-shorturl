const axios = require('axios')
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const path = require('path')
const UrlDto = require('../controllers/url')
const { Success } = require('../../core/http-exception')
const urls = new UrlDto()

router.get('/', async (ctx, next) => {
    await ctx.render('index')
    await next()
})

router.post('/add/url', async (ctx, next) => {
    let result = await urls.add(ctx)
    throw new Success(result,'添加成功')
})

router.post('/add/code', async (ctx, next) => {
    let result = await urls.addByCode(ctx)
    throw new Success(result,'添加成功')
})

router.get('/:code', async (ctx, next) => {
    let result = await urls.get(ctx)
    if (result && result.url) {
        ctx.redirect(result.url)
    } else {
        // ctx.redirect(global.config.indexUrl)
        await ctx.render('404')
        await next()
    }
})

module.exports = router