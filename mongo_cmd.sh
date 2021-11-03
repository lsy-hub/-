user myblog;

db.user.insertOne({
    username:'aa',
    password:123456
})

db.news.insertOne({
    title:"无",
    content:'123asds'
})

db.user.updateOne(
    {username:'aa'},
    {$set:{username:'liaosuyang'}}
)

db.gamelist.insertOne({
    gameId:1,
    gameName:'好玩'
})

# 查询
db.gamelist.find()
# 查询带条件
db.gamelist.find(
    {gameName:'好玩'}
)
db.news.find(
    {}
)