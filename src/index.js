import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './Grid';
import * as serviceWorker from './serviceWorker';

// Getting cast id from the URL
const sCastId = window.location.pathname.substr(1);

ReactDOM.render(<Grid sCastId={sCastId}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
