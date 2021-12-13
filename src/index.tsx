import React from 'react';
import ReactDOM from 'react-dom';
import { AlitaProvider } from 'redux-alita';
import {
  HashRouter,
} from 'react-router-dom';

import App from './App';
import 'antd/dist/antd.css';
import './style/index.less';
// import reportWebVitals from './reportWebVitals';

// 微应用
import './micro-app';

ReactDOM.render(
<AlitaProvider>
  <HashRouter>
  <App />
  </HashRouter>
  </AlitaProvider>,
document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
