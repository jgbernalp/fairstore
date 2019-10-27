import { h, JSX } from 'preact';
import styles from './SearchBar.styl';
import { SearchIcon } from '../icons/SearchIcon';
import { classNames } from '../utils/classNames';

export const SearchBar = ({ className }: JSX.HTMLAttributes) => (
  <div className={classNames(styles.searchBar, className)}>
    <SearchIcon />
    <input type="search" placeholder="Search" />
  </div>
);
