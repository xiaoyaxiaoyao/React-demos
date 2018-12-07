import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { login } from '../redux/index.redux'; //获取后端的post接口
import '../../static/login.css';
const FormItem = Form.Item;

@connect(
  state=>state.user,
  {login}
)
class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
			password:'',
    }
  }
  // 查询输入框中的值，存储在state中
  handleChange(key,val){
    this.setState({
      [key]:val
    })
  }
  // 点击登录按钮 获取state的值post到后端 login，跳转到对应的页面
  handlelogin(){
    // 点击login的时候，头像变成活跃版
    this.props.login(this.state);
  }
  render(){
    return(
      <div className="login">
        <div className="loginBox">
          <div className="loginIcon"></div>
          {this.props.redirectTo? <Redirect to='/home' /> : null }
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              <Input 
                id="email"
                prefix={<Icon type="user" style={{ color: 'rgb(244, 224, 224)' }} />} 
                placeholder="Email" 
                onChange={v=>this.handleChange('email',document.getElementById("email").value)} 
              />
            </FormItem>
            <FormItem>
              <Input 
                id="password"
                prefix={<Icon type="lock" style={{ color: 'rgb(244, 224, 224)' }} />} 
                type="password" 
                placeholder="Password" 
                onChange={v=>this.handleChange('password',document.getElementById("password").value)} 
              />
            </FormItem>
            {this.props.msg?<div className="errorBox">{this.props.msg}</div>:null}
            <FormItem>
              <div className="rememberBox">
                <Checkbox>Remember me</Checkbox>
                <div>
                  <a className="login-form-forgot" href="">Forgot password</a>
                  <Link to="/register" className="register-from-button">register</Link>
                </div>
              </div>
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handlelogin.bind(this)}>
                Login
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
export default Login