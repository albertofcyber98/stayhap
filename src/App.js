import React from 'react';
import 'assets/scss/style.scss';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import LandingPage from 'pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path='/' component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
