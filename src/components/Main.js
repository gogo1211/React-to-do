import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Header from './Common/Header';
import Footer from './Common/Footer';
import Home from './Home';
import AboutMe from '../containers/AboutMe';
import Skill from './Skill';
import Education from './Education';

class Main extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/aboutme" component={ AboutMe } />
          <Route path="/skill" component={ Skill } />
          <Route path="/education" component={ Education } />
          <Route path="/" component={ Home } />
          <Route render={() => <Redirect to="/"/>} />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
