// src/components/Header/Header.js

import React from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { setSearchQuery } from '../../redux/actions/searchActions';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value.toLowerCase()));
  };

  return (
    <div className={styles.header}>
      <div>Dashboard V2</div>
      <div>
        <SearchIcon className={styles.icon} />
        <input
          type="search"
          placeholder="search anything"
          className={styles.inputfield}
          onChange={handleSearchChange} // Handle search input change
        />
      </div>
    </div>
  );
};

export default Header;
