import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Root/>
  </MuiThemeProvider>
    , document.getElementById('root')
);