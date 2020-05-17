import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Market from './pages/market';
import Error404 from './pages/error404'


export default function Routes() {
    return (
        <BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/pokestore" component={Home} />
				<Route path="/market" component={Market} />
				<Route path='*' component={Error404} />
			</Switch>
		</BrowserRouter>
    );
}