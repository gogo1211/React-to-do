import React from 'react';
import Title from './Title';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [
        'React',
        'Angular',
        'Vue',
        'React Native',
        'Redux',
        'Redux-saga'
      ],
      index: 0,
    };
  };

  render() {
    const { titles, index } = this.state;
    return (
      <div className="main">
        <Title title={titles[index]}></Title>
        <button
          className="btn-next"
          onClick={() => this.increaseIndex()}
        >
          Next
        </button>
      </div>
    );
  };

  increaseIndex = () => this.setState({
    index: (this.state.index + 1) % this.state.titles.length
  });
}

export default Main;
