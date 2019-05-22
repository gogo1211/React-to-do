import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class CustomLink extends React.Component {
  render() {
    const { target, name, location } = this.props;
    return (
      <Link to={target}
        className={location.pathname === target ? 'active' : 'normal'}>
        {name}
      </Link>
    );
  }
}

export default withRouter(CustomLink);
