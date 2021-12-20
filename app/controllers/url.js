const {
    Url
} = require("../model")
const isUrlHttp = require('is-url-http')
const {
    getUuid
} = require('../utils/uuid')
const {
    ParameterException,
    Success
} = require('../../core/http-exception')

class UrlDto {
    async get(ctx) {
        let {
            code
        } = ctx.params
        let result = await Url.findOne({
            where: {
                code
            },
            attributes: ['code', 'url', 'show', 'visit']
        })

        if (result && result.url) {
            await Url.update({
                visit: result.visit + 1
            }, {
                where: {
                    code
                }
            })
        }

        return result
    }

    async add(ctx) {
        let {
            url
        } = ctx.request.body
        if (isUrlHttp(url)) {
            let result_url = await Url.findOne({
                where: {
                    url
                },
                attributes: ['code', 'url', 'show', 'visit']

            })
            if (result_url) {
                throw new Success(result_url, '该链接已生成短网址')
            }
            let len = this.randomNum()
            let code = getUuid(len)
            return await Url.create({
                code,
                url
            })
        } else {
            throw new ParameterException(null, '链接格式错误')
        }
    }

    async addByCode(ctx) {
        let {
            url,
            code
        } = ctx.request.body
        let result_url = await Url.findOne({
            where: {
                url
            },
            attributes: ['url', 'code']

        })
        if (result_url) {
            throw new Success(result_url, '该链接已生成短网址')

        }
        let result_code = await Url.findOne({
            where: {
                code
            },
            attributes: ['url', 'code']

        })
        if (result_code) {
            throw new ParameterException(result_code, '该短链后缀已绑定其他链接')
        }
        if (isUrlHttp(url)) {
            return await Url.create({
                code,
                url
            })
        } else {
            throw new ParameterException(null, '链接格式错误')
        }
    }

    randomNum() {
        let number = 0
        while (number < 4) {
            number = Math.floor(Math.random() * 8) + 1
        }
        return number
    }


}

module.exports = UrlDto