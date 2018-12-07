import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadData } from '../redux/index.redux';

import axios from 'axios';
@withRouter
@connect(
  null,
  {loadData}
)
class AuthRouter extends Component {
  componentDidMount(){
    // 获取用户信息，判断用户是否登录，如果登录则直接跳转到首页，否则回到登录页。
    const publicList = ['/login','/register']; // 获取登录和注册的路由，由于在登录和注册页面是不需要相互跳转的，将路由提取出来过滤掉
    const pathname = this.props.location.pathname; //获取路由路径
    if(publicList.indexOf(pathname)>-1){
      return null;
    }

    axios.get('/user/info').
      then(res=>{
        if(res.status == 200){
          console.log(res.data);
          if(res.data.code == 0){
            this.props.loadData(res.data.data)
          }else {
            console.log(this.props.history,"1111");
            this.props.history.push('/login')
          }
        }
      })
  }
  render(){
    return null
  }
}

export default AuthRouter