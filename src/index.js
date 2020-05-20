import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import themePokeStore from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <ThemeProvider theme={themePokeStore}>
    <App />
    <CssBaseline />
  </ThemeProvider>,
  document.getElementById('root')
);
