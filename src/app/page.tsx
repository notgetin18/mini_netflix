import React from 'react';
import './HomePage.scss';
import Navbar from '@/components/Navbar';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <div className="home-page">
        <Navbar />
        <div className="home-page__content">
          <h1><span>LET'S WATCH</span> MOVIE TOGETHER</h1>
          <p>From award-winning dramas to blockbuster action movies, we've got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
