import { Layout, Carousel, Button, InputNumber } from 'antd';
import React from 'react';
import { connect } from 'dva';
import './Content.css';
import { GetUser } from '../services/test';

function ContentComponent({ dispatch, number, onIncrement, getData }) {
  function set(value) {
    dispatch({ type: 'count/set', payload: value });
  }

  return (
    <Layout.Content
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Carousel autoplay>
        <div>
          <h3>软件</h3>
        </div>
        <div>
          <h3>商城</h3>
        </div>
        <div>
          <h3>检测</h3>
        </div>
      </Carousel>
      <div
        type={{
          margin: '0px',
          float: 'inline',
        }}
      >
        <InputNumber min={1} max={10} value={number} onChange={set} />
        <h1>{number}</h1>
        <Button type="primary" onClick={onIncrement}>点我</Button>
        <Button type="primary" onClick={getData}>点我</Button>
      </div>
    </Layout.Content>
  );
}

function mapStateToProps(state) {
  return { number: state.count };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onIncrement: () => {
      dispatch({ type: 'count/add', payload: {} });
    },
    onChange: () => {
      dispatch({ type: 'count/set', payload: {} });
    },
    getData: () => {
      GetUser().then(({
        data: {
          data: user,
        },
      }) => {
        console.log(user);
        console.log(user.name);
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);
