
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

/** Jquery **/
//var $ = require('./lib/jquery.min.js');
//window.$ = $;
//window.jQuery = $;

/** Css **/
require('./main.scss');
/** bootstrap loader **/
//require('bootstrap-loader');

/** View **/
import App from './views/App.js';
import Projects from './views/Projects.js';
import Error404 from './views/Error404.js';

import ChartJs from './sources/ChartJs/views/ChartJs';
import Labs from './sources/LabsJs/view/Labs';

/** Redux  init **/
import { Provider } from 'react-redux'
//console.log("textTest", textTest);

import store from './redux/store/Store';

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/chartjs" component={ChartJs}/>
            <Route path="/labs" component={Labs}/>
            <Route path="*" component={Error404}/>
        </Router>
    </Provider>
), document.getElementById('content'));
