import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import themePokeStore from './theme';

ReactDOM.render(
  <ThemeProvider theme={themePokeStore}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
