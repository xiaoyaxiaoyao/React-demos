import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';// 引入 React-redux的Provider组件
import reducer from './reducer';// 引入react-redux 的本地的配置文件
import Routers from './router'; // 引入控制路由的文件

// 定义store
const store = createStore(reducer,compose(
   applyMiddleware(thunk),
   window.decToolsExtension?window.decToolsExtension():f=>f
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  // Provider 是 React-redux的一个重要的组件，应用在项目的最外层。传入store，使用一次即可
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);

