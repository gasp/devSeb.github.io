
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

/** Jquery **/
var $ = require('./lib/jquery.min.js');
window.$ = $;
window.jQuery = $;

/** Css **/
require('./main.scss');
/** bootstrap loader **/
require('bootstrap-loader');


/** View **/
import App from './views/App.js';



/** Redux  init **/
import { Provider } from 'react-redux'
//console.log("textTest", textTest);

import store from './redux/store/Store';

render((
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
    </Router>
    </Provider>
), document.getElementById('content'));
