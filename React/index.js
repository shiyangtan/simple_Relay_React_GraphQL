// import 'babel-polyfill';
//
import Cities from './component.js';
import HomeRoute from './route.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';



ReactDOM.render(
  <Relay.RootContainer
    Component={Cities}
    route={new HomeRoute()}
  />,
  document.getElementById('root')
);
