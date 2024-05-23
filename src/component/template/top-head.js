
const { Header } = Layout;
import Router from 'next/router';
import { Layout, 
    Button, 
    Col, Row, Badge,
    Avatar, 
    Space,
    theme,
    Typography} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
    BellOutlined
} from '@ant-design/icons';
import { useState, useEffect } from 'react';
const TopHead = ({collapsed, setCollapsed, setHide, hide}) => {
    const { Text, Link } = Typography;
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const[userInfo, setUserInfo] = useState({});
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const user = localStorage.getItem('userInfo');
        user && setUserInfo(JSON.parse(user));
      }
    },[]);
    return (
    <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Row>
              <Col xs={16} sm={16} md={16} lg={16} xl={20}>
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
                <Text strong>Walletbirr </Text> Statement
              </Col>
              <Col xs={8} sm={8} md={8} lg={8} xl={4}>
                <Space wrap size={30}>
                  <Badge count={5}>
                    <Button size={20} icon= {<BellOutlined />} />
                  </Badge>
                  <Button size={20} icon= {<LogoutOutlined />}  onClick={() => {
                      localStorage.removeItem('token');
                      localStorage.removeItem('userInfo');
                      Router.push('/');
                  } 
                  }/>
                </Space>
                
              </Col>
            </Row>
            
          </Header>
  );
}
export default TopHead;