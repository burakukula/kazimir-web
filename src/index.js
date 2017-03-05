import App from './App';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Content from './components/Content/Content'
import Street from './components/Street/Street'
// render(<App />, document.getElementById('root'));
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Content} />
            <Route path="map" component={Map} />
            <Route path="street" component={Street} />
        </Route>
    </Router>
), document.getElementById('root'))
