import { h } from 'preact';
import styles from './Navigation.styl';
import bp from '../ui/Breakpoints.styl';
import { Link } from 'preact-router/match';
import { Wrapper } from '../ui/containers/Wrapper';
import { SearchBar } from './SearchBar';
import { ShoppingCartIcon } from '../icons/ShopingCartIcon';
import { PersonIcon } from '../icons/PersonIcon';
import { classNames } from '../utils/classNames';
import { SearchIcon } from '../icons/SearchIcon';
import { MenuIcon } from '../icons/MenuIcon';
import { connect } from 'unistore/preact';
import { navigationActions } from '../store/navigationActions';
import { State } from '../store/State';

interface NavigationConnectedProps {
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

const handleMenuClick = (
  setMenuOpen: NavigationConnectedProps['setMenuOpen'],
  isMenuOpen: NavigationConnectedProps['isMenuOpen'],
) => () => {
  setMenuOpen(isMenuOpen);
};

const Navigation = ({ isMenuOpen, setMenuOpen }: NavigationConnectedProps) => {
  const links = (
    <nav className={styles.links}>
      <Link onClick={handleMenuClick(setMenuOpen, false)} activeClassName={styles.active} href="/">
        Home
      </Link>
      <Link onClick={handleMenuClick(setMenuOpen, false)} activeClassName={styles.active} href="/products">
        Products
      </Link>
      <Link onClick={handleMenuClick(setMenuOpen, false)} activeClassName={styles.active} href="/farmers">
        Farmers & Crafters
      </Link>
    </nav>
  );

  return (
    <div>
      <div className={classNames(styles.sideMenu, isMenuOpen && styles.open)}>{links}</div>
      <div className={styles.navBar}>
        <Wrapper className={styles.wrapper}>
          <button className={styles.menuBtn} onClick={handleMenuClick(setMenuOpen, true)}>
            <MenuIcon className={bp.showSM} />
          </button>
          <div className={styles.logo}>FairStore</div>
          <div className={styles.right}>
            <SearchBar className={classNames(styles.searchBar, bp.hideXS)} />
            <SearchIcon className={classNames(styles.searchIcon, bp.showXS)} />
            <div className={classNames(styles.linksContainer, bp.hideSM)}>{links}</div>
            <ShoppingCartIcon className={classNames(styles.cartIcon, styles.icon)} />
            <PersonIcon className={classNames(styles.personIcon, styles.icon)} />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export const NavigationConnected = connect<{}, {}, State, NavigationConnectedProps>(
  ['isMenuOpen'],
  navigationActions,
)(Navigation);
