import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import albums_twenty_nineteen from './albums_twenty_nineteen';
import Home from './Home'
import Year from './Year'
import Collage from './Collage'


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/year" component={Year} />
      <Route path="/albums_twenty_nineteen" component={albums_twenty_nineteen} />
      <Route path="/collage" component={Collage} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
