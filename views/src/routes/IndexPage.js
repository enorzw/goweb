import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import ContentComponent from '../components/Content';
import './IndexPage.css';

function IndexPage() {
  return (
    <Layout>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </Layout>
  );
}

export default connect()(IndexPage);
