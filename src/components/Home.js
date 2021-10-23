import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Each from './Each';

const Home = ({ nasdaq }) => {
  const companies = nasdaq;
  const [fetchedData, setFetchedData] = useState(companies);
  const [searchValue, setSearchValue] = useState('');
  if (fetchedData.lenght > 0) {
    fetchedData.sort((a, b) => b.changesPercentage - a.changesPercentage);
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setFetchedData(() => companies);
  }, [companies]);

  const filteredData = [];

  if (fetchedData.length > 0 && searchValue) {
    fetchedData.filter((each) => {
      if (each.companyName.toLowerCase().includes(searchValue)) {
        filteredData.push(each);
      }
      return filteredData;
    });
  }

  return (
    <div>
      <div className="full-width">
        <div className="search-container">
          <p>Search by company name</p>
          <input id="country-search" className="search-field" placeholder="Search" type="text" onChange={handleSearch} />
        </div>
        <h5 className="list-heading">Top Performers</h5>
      </div>
      <div className="container">
        {filteredData && filteredData.map((item, index) => (
          <div key={item.ticker} className="container-child">
            <Each
              name={item.ticker}
              price={item.price}
              index={index}
              company={item.companyName}
            />
          </div>
        ))}
        {filteredData.length === 0 && fetchedData.map((item, index) => (
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
