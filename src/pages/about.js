import React from 'react';
import Navigation from '../components/navigation';
import Helmet from 'react-helmet';

function About() {
  return (
    <div>
      <Helmet>
        <title>Podstrona o nas</title>
      </Helmet>
      <Navigation />
      About
    </div>
  )
}

export default About;