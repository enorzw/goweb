import { Menu, Icon, Layout } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router';

const SubMenu = Menu.SubMenu;

export default class HeaderComponent extends Component {
  render() {
    return (
      <Layout.Header>
        <Menu
          mode="horizontal"
          theme="dark"
          style={{ lineHeight: '64px', width: '100%' }}
        >
          <Menu.Item key="home">
            <Link to="/"><Icon type="home" />主页</Link>
          </Menu.Item>
          <Menu.Item key="soft">
            <Link to="/soft"><Icon type="code-o" />联宠软件</Link>
          </Menu.Item>
          <Menu.Item key="shop">
            <Link to="/shop"><Icon type="shopping-cart" />联宠商城</Link>
          </Menu.Item>
          <Menu.Item key="examination">
            <Link to="/examination"><Icon type="api" />检测中心</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">关于</Link>
          </Menu.Item>
          <SubMenu key="sub4" title={<span style={{ float: 'right' }}><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </Layout.Header>
    );
  }
}
