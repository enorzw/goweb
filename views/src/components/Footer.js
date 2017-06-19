import { Layout } from 'antd';
import React from 'react';
import { connect } from 'dva';

function FooterComponent() {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
        ©2016 Created by zat
      </Layout.Footer>
  );
}

export default connect()(FooterComponent);
