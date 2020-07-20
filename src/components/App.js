import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import BlogList from './pages/BlogList';
import BlogShow from './pages/BlogShow';
import Header from './Header';

import history from '../history';

const App = ()=>{
	return (
		<div className="container pt-3 px-5">
		<Router history={history}>
		 <div>
		 <Header />
		  <Switch>
		  <Route path="/" exact component={BlogList}  />
		  <Route path="/blog/:id" exact component={BlogShow}  />
		  </Switch>
		 </div>
		</Router>
		</div>
		)
}

export default App;