import { GroupOutlined, FileTextOutlined, RiseOutlined, CreditCardOutlined, CarOutlined, SettingOutlined, AppstoreOutlined, LineOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import MenuItem from './MenuItem'
import './mainLayout.scss'
import React from 'react';
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items1 = [
  getItem('Kanban Board', '1', <CreditCardOutlined />),
  getItem('Project settings', '2', <SettingOutlined />),
  getItem('Releases', '3', <CarOutlined />),
  getItem('', '', <LineOutlined />),
  getItem('Issues and filters', '4', <GroupOutlined />),
  getItem('Pages', '5', <FileTextOutlined />),
  getItem('Reports', '6', <RiseOutlined />),
  getItem('Components', '7', <AppstoreOutlined />)
];

const App = () => (
  <Layout>
    <Layout>
      <MenuItem />
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100vh',
            position: "relative",
            marginLeft: 80,
            borderRight: 0,
          }}
          items={items1}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
          marginLeft: 80
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
);
export default App;