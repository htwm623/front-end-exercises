import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LeftNav from '../../components/LeftNav/LeftNav';
import Note from '../Note/Note';
import Photo from '../Photo/Photo';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <LeftNav></LeftNav>
      <div className="home__con">
        <Switch>
          <Route path='/note'>
            <Note></Note>
          </Route>

          <Route path='/photo'>
            <Photo></Photo>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Home;
