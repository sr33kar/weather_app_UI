import React, { useState } from 'react';

const SearchBar = ({ onSearch, onCoordSearch }) => {
  const [city, setCity] = useState('');
  const [long, setLong] = useState('');
  const [lat, setLat] = useState('');
  const [view, setView] = useState(false);
  const handleSearch = () => {
    onSearch(city);
  };
  const handleCoordSearch = () => {
    onCoordSearch(lat, long);
  }
const handleSwitchView = (event) => {
  event.preventDefault();
  setView(!view);
}

  return (
    view ?
    <div className='search-bar'>
      <input
        type="text"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        placeholder="Enter Latitude"
      />
      <input
        type="text"
        value={long}
        onChange={(e) => setLong(e.target.value)}
        placeholder="Enter Longitude"
      />
      <button onClick={handleCoordSearch}>Search</button>
      <button className='switch_view' onClick={handleSwitchView}>Switch View</button>
    </div> :
    <div className='search-bar'>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      <button className='switch_view' onClick={handleSwitchView}>Switch View</button>
    </div>
  );
};

export default SearchBar;
