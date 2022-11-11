import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  PlusOutlined  
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';
import './mainLayout.scss'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('SEARCH ISSUES', '1', <SearchOutlined  />),
  getItem('CREATE ISSUES', '2', <PlusOutlined  />),
];
const MenuItem = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{ position: 'absolute', zIndex: '100' }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  );
};
export default MenuItem;