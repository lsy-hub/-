const Koa = require("koa")
const router = require("koa-router")();
const app = new Koa();
const gamelistModel = require('./models/home')
const newslistModel = require('./models/news')
const userlistModel = require('./models/user')
const cors = require("koa2-cors")
const bodyParser = require("koa-bodyparser")
router.get('/goods/list', async ctx => {
    var gameList = await gamelistModel.find();
    ctx.body = {
        code: 200,
        data: gameList,
        msg: "GET / gamelist success"
    }
})
router.get('/news/list', async ctx => {
    var newsList = await newslistModel.find();
    ctx.body = {
        code: 200,
        data: newsList,
        msg: "GET / news success"
    }
})
router.post('/login', async ctx => {
    var username = ctx.request.body.username
    var password = ctx.request.body.password
    var res = await userlistModel.find({
        username: username,
        password: password
    })
    if (res == '') {
        ctx.body = {
            code: 400,
            msg: "POST / 登录失败"
        }
    } else {
        ctx.body = {
            code: 200,
            msg: "POST / 登录成功"
        }
    }
})

app.use(cors())
app.use(bodyParser())
app.use(router.routes());
app.listen(8081);