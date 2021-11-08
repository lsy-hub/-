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
router.post('/goods/delete', async ctx => {
    var idx = ctx.request.body.id;
    var res = await gamelistModel.deleteOne({
        _id: idx
    })
    if (res.deletedCount) {
        ctx.body = {
            code: 200,
            msg: '删除成功'
        }
    }
})
router.post('/goods/add', async ctx => {
    var title = ctx.request.body.title;
    var Issuedate = ctx.request.body.Issuedate;
    var originalPrice = ctx.request.body.originalPrice;
    var discountPrice = ctx.request.body.discountPrice
    var sales = '0';
    var tagss = ctx.request.body.type;
    var Developers = ctx.request.body.Developers
    var platform = ctx.request.body.platform
    var publisher = ctx.request.body.publisher
    var describe = ctx.request.body.describe
    var res = await gamelistModel.create({
        title: title,
        describe: describe,
        customAttributes: {
            Developers: Developers,
            publisher: publisher,
            Issuedate: Issuedate,
            platform: platform
        },
        price: {
            originalPrice: originalPrice,
            discountPrice: discountPrice,
            sales: sales
        },
        tagss: {
            tagss
        }
    })
    if (res._id) {
        ctx.body = {
            code: 200,
            msg: '添加成功'
        }
    }
})

router.post('/news/delete', async ctx => {
    var idx = ctx.request.body.id;
    var res = await newslistModel.deleteOne({
        _id: idx
    })
    if (res.deletedCount) {
        ctx.body = {
            code: 200,
            msg: '删除成功'
        }
    }
})

router.post('/news/add', async ctx => {
    var title = ctx.request.body.title;
    var Issuedate = ctx.request.body.Issuedate;
    var author = ctx.request.body.author;
    var short = ctx.request.body.short;
    var content = ctx.request.body.content
    var res = await newslistModel.create({
        title: title,
        Issuedate: Issuedate,
        author: author,
        short: short,
        content: content,
    })
    if (res._id) {
        ctx.body = {
            code: 200,
            msg: '添加成功'
        }
    }
})


app.use(cors())
app.use(bodyParser())
app.use(router.routes());
app.listen(8081);