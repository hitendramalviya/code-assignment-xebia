import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ term, onChange }) => (
  <div>
    <input type="text" name="searchTerm" value={term} onChange={(e) => onChange(e.target.value)}/>
    <button type="submit">Search</button>
  </div>
);

SearchBox.propTypes = {
  term: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default SearchBox;
