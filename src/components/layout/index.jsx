import { Divider, Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import AppSideBar from "../sidebar";
import AppHeader from "../header";
import AppFooter from "../footer";
import { useState } from "react";

const AppLayout = (props)=> {

    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
    return <Layout>
    <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} colorBgContainer={colorBgContainer} />
    <Divider style={{margin:0}}></Divider>
    <Layout className="site-layout">
    <AppSideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Content
        style={{
          padding: '48px 40px',
          minHeight: 280,
          background: '#fff'
        }}
      >
        {props.children}
      </Content>
      <AppFooter />
    </Layout>
  </Layout>
} 

export default AppLayout;