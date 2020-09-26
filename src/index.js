import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Agregar from './pages/AddStartup';
import Home from './pages/Home';
import AddStartup from './pages/AddStartup';
import PruebaLocalStorage from './pages/PruebaLocalStorage';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/agregar" component={AddStartup}/>
    <Route exact path="/prueba-local-storage" component={PruebaLocalStorage}/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
