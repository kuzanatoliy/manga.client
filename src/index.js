import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import theme from './themes/main-theme';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={ store }>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
