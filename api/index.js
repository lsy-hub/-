const Koa = require("koa")
const router = require("koa-router")();
const app = new Koa();
const gamelistModel = require('./models/home')
const cors = require("koa2-cors")
router.get('/home', async ctx => {
    var data = await gamelistModel.find();
    ctx.body = {
        code: 200,
        data: data,
        msg: "GET / gamelist success"
    }
})
app.use(cors())
app.use(router.routes());
app.listen(8081);