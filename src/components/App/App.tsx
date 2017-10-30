import * as React from 'react';
import {Layout} from 'antd';
import './App.scss';

export const App = () => (
  <Layout className={'app'}>
    <Layout.Sider collapsed={true}>Nav</Layout.Sider>
    <Layout.Content className={'left-container'} style={{background: '#fff'}}>
      Image
    </Layout.Content>
    <Layout.Content className={'main-container'} style={{background: '#ff95ab'}}>
      Content
    </Layout.Content>
  </Layout>
);
