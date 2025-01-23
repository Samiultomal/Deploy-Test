import React from 'react';
import Header from '../../components/header_component/Header';
import Footer from '../../components/footer_component/Footer';

import HomeBanner from '../../components/home_components/HomeBanner';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Footer />
    </div>
  );
};

export default Home;
