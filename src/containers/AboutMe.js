import React from 'react';
import { connect } from 'react-redux';

import AboutMe from '../components/AboutMe';

const AboutMeContainer = (profile) => <AboutMe profile={profile} />;

const mapStateToProps = ({ profile }) => ({
  profile,
});

export default connect(mapStateToProps)(AboutMeContainer);
