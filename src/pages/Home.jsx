import React, { Fragment } from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Featured from '../components/Featured';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Featured />
    </Fragment>
  );
};

export default Home;