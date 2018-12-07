import React, { Component } from 'react';
import { Input, Row, Col, Icon } from 'antd';
import '../../static/rightHeader.css'
class RightHeader extends Component {
  render() {
    return (
        // right header
        <div className="rightHeader">
          {/* 搜索 */}
          <Row>
              <Col span={7} offset={4} >
                <span className="seachIcon"></span>
                <Input placeholder="Please enter what you want to search for" />
              </Col>
            <Col className="userSet" type="flex" justify="end" span={3} offset={5}>
              {/* 设置 */}
              <div><Icon className="setIcon" type="setting" /></div>
              {/* 个人信息 */}
              <div className="userInfo">
                <span className="userInfoIcon"></span>
              </div>
            </Col>
          </Row>
        </div>
    );
  }
}

export default RightHeader;