import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../components/home/Home';
import About from '../components/about/About';
import PropsStore from '../components/propsStore/PropsStore'

export default (
	<Route path="/">
		<IndexRoute component={Home} />
		<Route path="/about" component={About} />
		<Route path="/propsStore" component = {PropsStore}/>
	</Route>
);
