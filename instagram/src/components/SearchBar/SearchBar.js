import React from 'react';
import PropTypes from 'prop-types';
import { Search } from '../../styles/SerachBar';

function SearchBar({ setSearch, searchText }) {
  return (
    <div>
      <Search onChange={setSearch} value={searchText} placeholder="Search" type="text" />
    </div>
  );
}

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
