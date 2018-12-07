import React, { Component } from 'react';
import { Input, Icon, Dropdown, Button, Menu, Card, Col, Row } from 'antd';
import EditableTable from './table/table'
import '../../static/rightHome.css'
const Search = Input.Search;

class RightHome extends Component {
  constructor(props){
    super(props)
    this.state={
      windowHeight: document.documentElement.clientHeight + "px",
    }
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
        <Menu.Item key="2"><Icon type="exception" />2nd menu item</Menu.Item>
        <Menu.Item key="3"><Icon type="alert" />3rd item</Menu.Item>
      </Menu>
    );
    return (
        // left nav
        <div className="rightHome" style={{height:this.state.windowHeight}}>
          <div className="contentHome">
            {/* 组件 title */}
            <div className="contentTopBox">
              <div className="contentT contentTitle">
                <span className="dashboaroIcon"></span>
                <span>DASHBOARD</span>
              </div>
              <div className="contentT timeBox">
                <Icon type="info-circle" />
                <span>Welcome back,  Dave mattew!  Your last sig in at Yesterday, 16:54 PM</span>
                <Icon type="close" className="closeBox" />
              </div>
              <div className="contentT smallMenu">
                <Dropdown overlay={menu}>
                  <Button style={{ marginLeft: "14px",marginTop: "14px" }}>
                    Button <Icon type="down" />
                  </Button>
                </Dropdown>
              </div>
            </div>
            {/* 卡片 */}
            <Row gutter={16} type="flex" justify="space-around" >
              <Col span={8} className="cardBox">
                <Card title="$163300" bordered={false}>Card content</Card>
              </Col>
              <Col span={8} className="cardBox">
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
              <Col span={8} className="cardBox">
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
            </Row>
            <div className="tableBox">
              <EditableTable />
            </div>
            
          </div>
        </div>
    );
  }
}

export default RightHome;