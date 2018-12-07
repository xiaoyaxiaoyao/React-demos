import axios from 'axios';
import {getRedirectPath} from '../../util';
const REGISTER_SUCCESS = "REGISTER_SUCCESS"; // 注册成功
const LOGIN_SUCCESS = "LOGIN_SUCCESS"; // 登录
const LOAD_DATA = "LOAD_DATA"
const ERROR_MSG = "ERROR_MSG"; // 注册&登录失败

const initialUserState = {
  isAuth: false, // 是否登录
  msg:"", // 错误信息
  email:"", // 用户名
  type:"", // 存放跳转的路径
}
//  创建一个 reducer 用户的注册信息
export function user( state = initialUserState , action){
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
    case 'LOGIN_SUCCESS':
      return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
    case 'LOAD_DATA':
      return {...state,...action.payload}
    case 'ERROR_MSG':
      return {...state,msg:action.msg,isAuth:false}
    default:
      return state
  }
}
// 调用注册成功的
export function registerSuccess(data){
  return {type: REGISTER_SUCCESS, payload: data}
}
export function loginSuccess(data){
  return {type: LOGIN_SUCCESS, payload: data}
}
export function errorMsg(msg){
  return {msg, type: ERROR_MSG}
}

export function loadData(userinfo){
  return { type:LOAD_DATA,payload:userinfo }
}
// 注册 post 的函数
export function register({email,password,confirmpwd}){
  if(!email || !password || !confirmpwd){
    return errorMsg("请输入用户名和密码")
  }
  if(password !== confirmpwd){
    return errorMsg("密码和确认密码不匹配")
  }
  return dispatch=>{
    axios.post("/user/register",{email,password})
      .then(res=>{
        if(res.status == 200 && res.data.code === 0){
          dispatch(registerSuccess({email,password}))
        }else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}
// 登录 post 的函数
export function login({email,password}){
  if(!email || !password){
    return errorMsg("请输入用户名和密码")
  } 
  return dispatch=>{
    axios.post("user/login",{email,password})
    .then(res=>{
      if(res.status == 200 && res.data.code === 0){
        dispatch(loginSuccess(res.data.data))
      }else{
        dispatch(errorMsg(res.data.msg))
      }
    })
  }

}

// store.dispatch({type:'add'})
// console.log(store.getState())

/**
 * redux 的 API
 * let store = createStore(counter)
 * API 是 { subscribe, dispatch, getState } 
 *  - subscribe ---- 可以手动订阅更新，也可以事件绑定到视图层
 *  - dispatch ---- dispatch的action用改变state的值
 *  - getState ---- 获取
 */

/**
 * @ payload 的解释
 * payload 字面意思“有效载荷，有效负荷，有效载重”
 * 对于程序员来说， 就是在程序中，起 “关键作用” 的代码。
 * 比如 一个 ajax 的请求 返回一个 JSON 格式
 * 这里面大  data 就是 payload， 而其他的 code，msg 的信息就是 load ，虽然也是信息但相对的没有那么重要
 * $.ajax({
 *    code:0,
 *    msg:"",
 *    data:{
 *      user: "xiaoming"
 *    }
 * })
 *  
 */
