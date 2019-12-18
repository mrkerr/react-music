import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ShowAlbums from './ShowAblums';
import ShowSongs from './ShowSongs';
import Home from './Home'
import Year from './Year'
import Collage from './Collage'


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/year_2019" render={(props) => <Year {...props} year={`2019`} />} />
      <Route path="/year_2018" render={(props) => <Year {...props} year={`2018`} />} />
      <Route path="/year_2017" render={(props) => <Year {...props} year={`2017`} />} />
      <Route path="/year_2016" render={(props) => <Year {...props} year={`2016`} />} />
      <Route path="/decade" render={(props) => <Year {...props} year={`Decade`} />} />
      <Route path="/ShowAlbums" component={ShowAlbums} />
      <Route path="/ShowSongs" component={ShowSongs} />
      <Route path="/collage" component={Collage} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
