import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import themePokeStore from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

ReactDOM.render(
	<>
		<div id="back-to-top-anchor" />
		<App />
		<ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} lightBackground />
		<CssBaseline />
	</>,
	document.getElementById('root')
);
