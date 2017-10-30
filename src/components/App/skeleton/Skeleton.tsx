import * as React from 'react';
import {Layout} from 'antd';
import './Skeleton.scss';

export const Skeleton = () => (
  <Layout className={'skeleton'}>
    <Layout.Sider collapsed={true}>Nav</Layout.Sider>
    <Layout.Content className={'meta-container'}>
      Image
    </Layout.Content>
    <Layout.Content className={'content-container'}>
      Content
    </Layout.Content>
  </Layout>
);
