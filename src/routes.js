import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home';
import Type from './components/pages/type';
import Error404 from './components/pages/error404'


export default function Routes() {
    return (
        <BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/pokestore" component={Home} />
				<Route path="/pokestore/type/:name" component={Type} />
				<Route path="*" component={Error404} />
			</Switch>
		</BrowserRouter>
    );
}