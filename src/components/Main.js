import React from 'react';
import Header from './Header/Header';
import Content from './Content';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Content></Content>
      </div>
    );
  }
}

export default Main;
