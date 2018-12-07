import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// 引入 react-redux的 connect组件
import { connect } from 'react-redux';
import {add,remove} from'./component/redux/index.redux';
import './static/App.css';
class App extends Component {
  render() {
    const num = this.props.num
    return (
      <div className="app">
      </div>
      
    );
  }
}

export default App;









// map State to Props 需要的数据
// const mapStatetoProps=(state)=>{
//   return {num:state}
// }
// action Creators 需要的方法
// const actionCreators = {add,remove}
// Connect 负责从外部获取组件需要的参数
// App = connect(mapStatetoProps,actionCreators)(App)

// <div className="App">
//   现在的状态 state = {num}
//   <button onClick={this.props.add}>+</button>
//   <button onClick={this.props.remove}>-</button>
// </div>
// {/* <li>
//   <Link to="/">首页</Link>
// </li>
// <li>
//   <Link to="/login">登录</Link>
// </li>
// <li>
//   <Link to="/jianjie">简介</Link>
// </li> */}