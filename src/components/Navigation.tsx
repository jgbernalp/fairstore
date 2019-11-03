import { h } from 'preact';
import styles from './Navigation.styl';
import bp from '../ui/Breakpoints.styl';
import { Link } from 'preact-router/match';
import { Wrapper } from '../ui/containers/Wrapper';
import { SearchBar } from './SearchBar';
import { ShoppingCartIcon } from '../icons/ShopingCartIcon';
import { PersonIcon } from '../icons/PersonIcon';
import { classNames } from '../utils/classNames';
import { MenuIcon } from '../icons/MenuIcon';
import { connect } from 'unistore/preact';
import { navigationActions } from '../store/navigationActions';
import { State } from '../store/State';
import { Grid } from '../ui/grid/Grid';
import { CloseIcon } from '../icons/CloseIcon';

interface NavigationConnectedProps {
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

const handleToggleClick = (
  setMenuOpen: NavigationConnectedProps['setMenuOpen'],
  isMenuOpen: NavigationConnectedProps['isMenuOpen'],
) => () => {
  setMenuOpen(isMenuOpen);
};

const Navigation = ({ isMenuOpen, setMenuOpen }: NavigationConnectedProps) => {
  const links = (
    <Grid className={styles.links}>
      <Link onClick={handleToggleClick(setMenuOpen, false)} activeClassName={styles.active} href="/">
        Home
      </Link>
      <Link onClick={handleToggleClick(setMenuOpen, false)} activeClassName={styles.active} href="/products">
        Products
      </Link>
      <Link onClick={handleToggleClick(setMenuOpen, false)} activeClassName={styles.active} href="/farmers">
        Farmers & Crafters
      </Link>
    </Grid>
  );

  return (
    <div>
      <div className={classNames(styles.sideMenu, isMenuOpen && styles.open)}>
        <header className={styles.sideMenuHeader}>
          <button className={styles.closeBtn} onClick={handleToggleClick(setMenuOpen, false)}>
            <CloseIcon />
          </button>
        </header>
        {links}
      </div>
      <div className={styles.navBar}>
        <Wrapper className={styles.wrapper}>
          <Grid className={styles.grid}>
            <div className={bp.showSM}>
              <button className={styles.menuBtn} onClick={handleToggleClick(setMenuOpen, true)}>
                <MenuIcon />
              </button>
            </div>

            <div className={classNames(styles.logo, bp.hideXS)}>FairStore</div>

            <Grid className={styles.rightCol}>
              <SearchBar className={styles.searchBar} />
              <div className={classNames(styles.linksContainer, bp.hideSM)}>{links}</div>
              <div className={styles.iconsCol}>
                <ShoppingCartIcon className={classNames(styles.cartIcon, styles.icon)} />
                <PersonIcon className={classNames(styles.personIcon, styles.icon)} />
              </div>
            </Grid>
          </Grid>
        </Wrapper>
      </div>
    </div>
  );
};

export const NavigationConnected = connect<{}, {}, State, NavigationConnectedProps>(
  ['isMenuOpen'],
  navigationActions,
)(Navigation);
