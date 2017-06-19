import React from 'react';
import { Router } from 'dva/router';
import IndexPage from './routes/IndexPage';
import AboutPage from './routes/AboutPage';

function RouterConfig({ history }) {
  const routes = [
    {
      path: '/',
      component: IndexPage,
    },
    {
      path: '/soft',
      component: AboutPage,
    },
    {
      path: '/about',
      component: AboutPage,
    },
  ];

  return (
    <Router history={history} routes={routes} />
  );
}

export default RouterConfig;
