import { useNavigate } from 'react-router-dom';
import {
    MenuFoldOutlined,
    LayoutOutlined,
    SettingOutlined,
    IdcardOutlined,
  } from '@ant-design/icons';
  import { Button, Layout, Menu, theme } from 'antd';
  import { useState } from 'react';
import RouteApplication from '../../RouteApplication';

  const { Header, Sider, Content } = Layout;

 
  const Layouts = () => {
    const navigate=useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
          onClick={({key})=>{
            if(key==="signout"){

            }else{
                navigate(key);
            }
          }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '/Analyst',
                icon: <SettingOutlined />,
                label: 'Analyst',
              },
              {
                key: '/Resources',
                icon: <LayoutOutlined />,
                label: 'Resource',
              },
              {
                key: '/Application',
                icon: <IdcardOutlined />,
                label: 'Applicationz',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuFoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
           <RouteApplication/>
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default Layouts;