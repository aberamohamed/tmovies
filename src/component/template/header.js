const { Header, Sider, Content } = Layout;
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DesktopOutlined,
  BellOutlined
} from '@ant-design/icons';
import { Layout, 
         Menu, 
         Button, 
         theme, 
         Typography, 
         Col, Row, Badge,
         Avatar, 
         Space} from 'antd';
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
export default function Header1({content}) {
    const [collapsed, setCollapsed] = useState(false);
    const [hide, setHide] = useState(false);
    const { Text, Link } = Typography;
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const hideTitle =() => {
      setHide(collapsed ? false : true);
      console.log(collapsed)
    }
    const items = [
      getItem('Option 1', '1', <PieChartOutlined />),
      getItem('Option 2', '2', <DesktopOutlined />),
      getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
      ]),
      getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
      getItem('Files', '9', <FileOutlined />),
    ];
    return (
        <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={hideTitle} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
           {!hide ?
            <Button type="link" style={{padding:"40px 20px", fontSize:"20px"}}>Walletbirr Statement</Button> 
            : <Button type='link' style={{padding:"20px 30px", fontSize:"20px"}}>B</Button> }
          
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Row>
              <Col span={20}>
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => {setCollapsed(!collapsed); setHide(!hide)}}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
                <Text strong>Beyond </Text>Human Resource Management System
              </Col>
              <Col span={4}>
                <Space wrap size={30}>
                  <Badge count={5}>
                    <Button size={20} icon= {<BellOutlined />} />
                  </Badge>
                  <Avatar size={34} icon={<UserOutlined />} />
                </Space>
                
              </Col>
            </Row>
            
          </Header>
          <content>Test</content>
        </Layout>
      </Layout>
    )

}