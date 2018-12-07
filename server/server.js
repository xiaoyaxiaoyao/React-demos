// 操作后端接口
const express = require('express');
const model = require('./model');
const bodyParser = require("body-parser"); // 在使用 post 需要引入的插件,
const cookieParser = require("cookie-parser");
const userRouter = require('./user')
// 新建app
const app = express();
// 开启一个中间件 user下面的子路由 userRouter
app.use(cookieParser());
app.use(bodyParser.json())
app.use('/user',userRouter)



// 监听端口
app.listen(9000,function(){
  console.log('node app start at port 9000')
})



