
export default {
  namespace: 'count',
  state: 0,
  reducers: {
    add(state) {
      const value = state + 1;
      console.log('调用reducers => add');
      return value;
    },
    set(state, { payload: todo }) {
      console.log('调用reducers => set');
      return todo;
    },
  },
  effects: {
    *save({ payload: todo }, { put }) {
      console.log('调用effects => save');
      // yield call(saveTodoToServer,todo);
      yield put({ type: 'add', payload: todo });
    },
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          console.log('调用subscriptions => setup');
          dispatch({ type: 'save' });
        }
      });
    },
  },
};
