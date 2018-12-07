// 所有的用户信息
const express = require('express');
const Router = express.Router();
const utils = require('utility'); // md5 加密第三方插件
const model = require("./model");
const User = model.getModel("user");
// 在后端要忽略的数据
const _filter = {'password':0,'__v':0} 
// 实例 get
Router.get('/list',function(req,res){
  // 清空数据库
  // User.remove({},function(e,d){})
  User.find({},function(err,doc){
    return res.json(doc)
  })
})

// 实例 post 注册后端接收数据存储在数据库
Router.post('/register',function(req,res){
  const {email,password} = req.body;
  console.log(req.body)
  // 用户名是不能重的需要先查询一下user是否存在
  User.findOne({email},function(err,doc){
    // 查询 doc 如果 doc 存在，那么说明该用户名已经注册过了
    if(doc){
      // 响应 返回错误数据
      return res.json({code:1,msg:"用户名重复"})
    }
    //  查询 doc 不存在，新建一个库
    const userModel = new User({email,type,password:md5Pwd(password)})
    userModel.save(function(e,d){
      if(e){
        return res.json({code:1,msg:"后端报错"})
      }else{
        const {user,type,_id} = d
        res.cookie('userid',_id)
        return res.json({code:0,data:{email,type,_id}})
      }
    })

  })
})
// 登录部分
Router.post('/login',function(req,res){
  const {email,password} = req.body;
  User.findOne({email,password:md5Pwd(password)},_filter,function(err,doc){
    if(!doc){
      return res.json({code:1,msg:"用户名和密码不匹配"})
    }
    // 写 cookie 在 res
    res.cookie("userId",doc._id);
    return res.json({code:0,data:doc})
  })
})

Router.get('/info',function(req,res){
  // 读 cookie 在 req
  const { userId } = req.cookies;
  
  if(!userId){
    // 用户不存在
    return res.json({code:1})
  }
  User.findOne({_id:userId,_filter,function(err,doc){
    if(err){
      return res.json({code:1,msg:"后端错误"})
    }
    if(doc){
      return res.json({code:0,data:doc})
    }
  }})
})
// 抛出 router
module.exports = Router

function md5Pwd(pwd){
  const salt = 'lishan@cloudcc.com&!@#$%^'
  return utils.md5(utils.md5(pwd+salt))
}