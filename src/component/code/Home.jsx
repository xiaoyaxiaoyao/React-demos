import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Input } from 'antd';
import LeftNav from './leftNav'; // 引入左侧的nav部分
import RightHeader from './rightHeader'; // 引入右侧的header部分
import RightHome from './rightHome'; // 引入右侧的header部分
import '../../static/home.css'
const Search = Input.Search;
class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* left nav */}
        <LeftNav />
        {/* right */}
        <div className="rightHomeBox">
          {/* header Top */}
          <RightHeader />
          {/* homeButtom */}
          <RightHome />
        </div>
      </div>     
    );
  }
}

export default Home;