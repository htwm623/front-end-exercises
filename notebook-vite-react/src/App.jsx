import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {

  return (
    <div className='App'>
      <Router>
        <div>
          <Switch>
            <Route path='/'>
              <Home></Home>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
