import React from 'react';
import PropTypes from 'prop-types';
import Each from './Each';

const Home = ({ nasdaq }) => {
  const companies = nasdaq;
  companies.sort((a, b) => b.changesPercentage - a.changesPercentage);

  return (
    <div>
      <div className="full-width">
        <div className="search-container">
          <p>Search By Name</p>
          <input id="country-search" className="search-field" placeholder="Search" type="text" />
        </div>
        <h5 className="list-heading">Top Performers</h5>
      </div>
      <div className="container">
        {companies.map((item, index) => (
          <div key={item.ticker} className="container-child">
            <Each
              name={item.ticker}
              price={item.price}
              index={index}
              company={item.companyName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  nasdaq: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
