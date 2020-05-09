import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axious from 'axios';

axious.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axious.defaults.headers.common['Authorization'] =  'AUTH TOKEN';
axious.defaults.headers.post['Content-Type'] = 'application/json'; //this is by default

//sending the request
axious.interceptors.request.use(requestConfig => {
  // edit request config
  console.log(requestConfig);
  return requestConfig;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

//getting the response
axious.interceptors.response.use(response => {
  // edit request config
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

//removing the interceptors
// var myInterceptor = axious.interceptors.request.use(function () {/*...*/});
// axious.interceptors.request.eject(myInterceptor);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
