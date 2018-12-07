
// mongoose 工具函数库
const mongoose = require('mongoose');
// 连接 mongoose 的地址 /LSAHN-DEMO
const DB_URL = 'mongodb://127.0.0.1:27017/LSAHN-DEMO'
mongoose.connect(DB_URL)
// 通过 mongoose 连接 mongoDB
mongoose.connection.on('connected',function(){
  console.log("mongodb 连接成功")
})

// 建立一个 model 库
const models={
  user:{
    "email":{"type":String,"require":true},
    "password":{"type":String, "require":true},
  }
}
// 将数据存入mongoose中
for(let m in models){
  mongoose.model(m, new mongoose.Schema(models[m]))
}
// 返回 getModel
module.exports={
  getModel:function(name){
    return mongoose.model(name)
  }
}

// mongodb的启动和参数描述
// 以管理员模式启动CMD，切换到MongoDB的安装目录，并执行命令：
// mongod --dbpath "D:\mongodb\data\db"  --logpath "D:\mongodb\logs\log.txt"  --install -serviceName "MongoDB"  
// mongodb://127.0.0.1:27017

// 关于命令中的参数说明

// 参数 　　　　　　　　　　　描述
// --bind_ip　　 　　　　　　绑定服务IP，若绑定127.0.0.1，则只能本机访问，不指定默认本地所有IP
// --logpath	　　　　　　　　定MongoDB日志文件，注意是指定文件不是目录
// --logappend	　　 　　　　 使用追加的方式写日志
// --dbpath	　　　　　　　　 指定数据库路径
// --port	　　　　　 　　　　 指定服务端口号，默认端口27017
// --serviceName    　　　　  指定服务名称
// --serviceDisplayName	　　指定服务名称，有多个mongodb服务时执行。
// --install	　　　　　　　　   指定作为一个Windows服务安装。