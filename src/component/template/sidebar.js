const { Sider } = Layout;
import React from 'react';
import { useState } from 'react';
import { Layout, 
         Menu, 
         Button,
         Typography,
         theme} from 'antd';
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
import Link from 'next/link';
import { useEffect } from 'react';
import { getData, getMenu } from '../utils/api';
import icons from '../utils/icons';
function getItem(label, key, icon, children) {

    return {
        key,
        icon,
        children,
        label,
    };
}
const Sidebar = ({setCollapsed, collapsed, hide}) => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const [siderHidden, setSiderHidden] = useState(false);
    const [items, setItems] = useState([]);
    const hideTitle =() => {
      setHide(collapsed ? false : true);
      setSiderHidden(siderHidden ? false : true);
    }
    const fetchMenu = async (event) => {
      try {
        const id = {id : 1};
        const data = await getMenu('/menugroup/getMenu');
        let menus = [];
        for(let i = 0; i < data.menu.length; i++){
          let child = [];
          data.menu[i].child.map((item) => (
              child.push(getItem(<a href={item.link}>{item.module_name}</a>, item.id))
          ));
          const newItem = getItem(data.menu[i].module_name, data.menu[i].id, icons[data.menu[i].icon], child);
          menus.push(newItem);
        }
        setItems(menus);
        // Handle success
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
    useEffect(() => {
       fetchMenu();
    }, []);
   
   
    return (
        <Sider trigger={null} 
               collapsible collapsed={collapsed} 
               collapsedWidth={0}
               breakpoint='md'
               hidden={collapsed}
               onBreakpoint={broken => setCollapsed(broken)}>
          <div className="demo-logo-vertical" />
           {!hide ?
            <Button type="link" style={{padding:"40px 20px", fontSize:"20px"}}>Walletbirr</Button> 
            : <Button type='link' style={{padding:"20px 30px", fontSize:"20px"}}>Walletbirr</Button> }
          
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    );
}
export default Sidebar;