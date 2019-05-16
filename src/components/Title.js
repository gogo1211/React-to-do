import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <h1>Welcome to our "{this.props.title}" leacture</h1>
    );
  }
}

export default Title;
