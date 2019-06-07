import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/logo.png';
import right from '../../img/right.png';
import {
  SearchDiv, Search, SearchInputDiv, LogoImg, RightImg,
} from '../../styles/SearchBar';

function SearchBar({ setSearch, searchText }) {
  return (
    <SearchDiv>
      <LogoImg src={logo} alt="logo" />
      <SearchInputDiv>
        <Search onChange={setSearch} value={searchText} placeholder="Search" type="text" />
      </SearchInputDiv>
      <RightImg src={right} alt="icons" />
    </SearchDiv>
  );
}

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
