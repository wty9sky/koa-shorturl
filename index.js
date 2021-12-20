const Koa = require('koa')
const app = new Koa()
const path = require('path')
const InitManager = require('./core/init')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const views = require('koa-views')
const static = require("koa-static")
const catchError = require('./middleware/exception')



// app.use(static(__dirname + "/public"));

app.use(views(path.join(__dirname, './app/views'), {
  extension: 'ejs'
}))


app.use(cors())

app.use(koaBody({
}));
app.use(catchError)


InitManager.initCore(app)
app.use(static(path.join(__dirname,'static')));

app.listen(4001)
