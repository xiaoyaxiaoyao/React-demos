import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../redux/index.redux';
import { Form, Input, Button } from 'antd';
import '../../static/register.css';
const FormItem = Form.Item;

@connect(
  state=>state.user,
  {register}
)
class Register extends Component {
  constructor(props) {
		super(props)
		this.state = {
			email:'',
			password:'',
      confirmpwd:'',
      type:'home',
    }
  }
  
  // 验证邮箱是否正确 如果不正确 显示提示 Please fill in the correct email
  handleEmial(){
    // 获取用户名，限制只输入邮箱
    let emailVal = document.getElementById("email").value;
    // 邮箱验证正则
    let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    let emailErr = document.getElementById("emailErr"); // 邮箱的验证错误提示
    if(emailVal != "" || emailVal != null){
      if(reg.test(emailVal)){
        console.log("用户名--->",emailVal);
        emailErr.style.display = "none";
      }else {
        console.log("邮箱格式不正确，请重新输入")
        emailErr.style.display = "block";
      }
    }
  }
  // 通过 onchange 更改 用户填写的值
  handleChange(key,val){
		this.setState({
			[key]:val
		})
  }
  // 提交用户信息
  hanldeSubmit(){
    console.log("用户注册的数据集合---->", this.state);
    this.props.register(this.state)
  }
  
  render(){
    return(
      <div className="register">
        <div className="registerBox">
          {this.props.redirectTo? <Redirect to={this.props.redirectTo} /> : null }
          <Form>
            <FormItem label="E-mail" >
              <Input 
                placeholder="E-mail" 
                id="email" 
                onBlur={this.handleEmial.bind(this)}
                onChange={v=>this.handleChange('email',document.getElementById("email").value)} 
              />
              <label id="emailErr"> Please fill in the correct email</label>
            </FormItem>
            <FormItem label="Password">
              <Input 
                type="password" 
                placeholder="Password" 
                id="password" 
                onChange={value=>this.handleChange('password',document.getElementById("password").value)} 
              />
              <label id="passwordErr"> Inconsistent password filling</label>
            </FormItem>
            <FormItem label="Confirm Password">
              <Input 
                type="password" 
                placeholder="Confirm Password" 
                id="confirmpwd" 
                onChange={v=>this.handleChange('confirmpwd',document.getElementById("confirmpwd").value)}  
              />
              <label id="passwordpwdErr"> Inconsistent password filling</label>
            </FormItem>
            {this.props.msg?<div className="errorBox">{this.props.msg}</div>:null}
            <FormItem>
              <Button type="primary" htmlType="submit" onClick={this.hanldeSubmit.bind(this)} className="register-from-btn">Register</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
export default Register