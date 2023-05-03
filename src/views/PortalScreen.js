import React,{useState} from "react";
import { BrowserRouter, Route,  Routes, useLocation, useMatch, Link,useNavigate } from 'react-router-dom';
import Logo from "../assets/images/core-images/ebutler.png";
import LogoIcon from "../assets/images/icons/butler.png";
import organizationIcon from "../assets/images/icons/organization.png";
import adminIcon from "../assets/images/icons/superadmin.png";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Products from "./products/container/product";
import Cart from "./cart/container/Cart";
import HeaderTop from "./Header/header";
import OrganizationList from "./Organizations/OrganizationList";
const { Header, Sider, Content } = Layout;


const PortalScreen = (selected) => {
  const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="text-center" > <img src={Logo} className={collapsed == true ? "dp-none" : "sidebar-logo"}/> 
        <img src={LogoIcon} className={collapsed == true ? "sidebar-logo-icon" : "dp-none"}/>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key='1' onClick={()=> navigate("/ebutler/organizations")} icon={<img src={organizationIcon}/>}>Organizations</Menu.Item>
            <Menu.Item key='2' onClick={()=> navigate("/ebutler/cart")} icon={<img src={adminIcon}/>}>Super Admin</Menu.Item>
          </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
        >
            <HeaderTop/>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
            <Routes> 
                <Route path="organizations" element={<OrganizationList/>}/> 
                <Route  path="cart" element={<Cart/>}/>
            </Routes>
        </Content>
      </Layout>
    </Layout>
    )
}

export default PortalScreen