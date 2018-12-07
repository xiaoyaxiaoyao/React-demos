import React, { Component } from 'react';
import { Input, Menu, Icon, AutoComplete } from 'antd';
import '../../static/leftNav.css'
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
class LeftNav extends Component {
  constructor(props){
    super(props)
    this.state={
      windowHeight: document.documentElement.clientHeight + "px",
      openKeys: ['sub1'],
    }
  }
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
  onOpenChange = (openKeys) => {
    console.log("11211345456",this.state.openKeys)
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return (
        // left nav
        <div className="leftHomeNav" style={{height:this.state.windowHeight}}>
          {/* top ------ title */}
          <div className="navTitle">LSHAN-PROJECT</div>
          <div className="navBox">
            <AutoComplete
              dataSource={dataSource}
              className="navSearch"
              placeholder="input search text"
              filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            />
            {/* 首页 常用组件 */}
            <div className="navHome">Home</div>
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              className="navMenu"
            >
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Commonly</span></span>}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Report</Menu.Item>
                <SubMenu key="sub3" title={<span>Commonly</span>}>
                  <Menu.Item key="13">Home</Menu.Item>
                  <Menu.Item key="14">Report</Menu.Item>
                  <Menu.Item key="15">Mail</Menu.Item>
                  <Menu.Item key="16">Extra Page</Menu.Item>
                </SubMenu>
                <Menu.Item key="3">Mail</Menu.Item>
                <Menu.Item key="4">Extra Page</Menu.Item>
              </SubMenu>
            </Menu>
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              className="navMenu"
            >
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>All Menu</span></span>}>
                <Menu.Item key="5">Home</Menu.Item>
                <Menu.Item key="6">Report</Menu.Item>
                <Menu.Item key="7">Mail</Menu.Item>
                <Menu.Item key="8">Extra Page</Menu.Item>
                <Menu.Item key="9">Blog</Menu.Item>
                <Menu.Item key="10">Worksheet</Menu.Item>
                <Menu.Item key="11">Customer</Menu.Item>
                <Menu.Item key="12">Product</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
    );
  }
}

export default LeftNav;