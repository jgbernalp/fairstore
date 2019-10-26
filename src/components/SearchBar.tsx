import { h } from 'preact';
import styles from './SearchBar.styl';
import { SearchIcon } from '../icons/SearchIcon';

export const SearchBar = () => (
  <div className={styles.searchBar}>
    <SearchIcon />
    <input type="search" placeholder="Search" />
  </div>
);
