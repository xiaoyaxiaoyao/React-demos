import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import App from './App'; // 首页组件
import AuthRouter from './component/authRouter/authRouter'
import Login from './component/loginRegister/Login'; // 登录组件
import Register from './component/loginRegister/Register'; // 登录组件
import Home from './component/code/Home'; // 登录组件
import Resume from './component/code/resume'; // Resume组件

class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AuthRouter></AuthRouter>
          {/* exact:完全匹配，不含有包含关系 */}
          <Route path='/' exact component={App}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/home' component={Home}></Route>
          {/* <Route path='/resume' component={Resume}></Route> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default Routers;

