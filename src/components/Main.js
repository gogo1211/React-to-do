import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Header from './Common/Header';
import Footer from './Common/Footer';
import Home from './Home';
import AboutMe from './AboutMe';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/aboutme" component={ AboutMe }/>
          <Route path="/home" component={ Home }/>
          <Route render={() => <Redirect to="/home"/>}/>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
