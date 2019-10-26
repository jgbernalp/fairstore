import { h } from 'preact';
import styles from './Navigation.styl';
import { Link } from 'preact-router/match';
import { Wrapper } from '../ui/containers/Wrapper';
import { SearchBar } from './SearchBar';
import { ShoppingCartIcon } from '../icons/ShopingCartIcon';
import { PersonIcon } from '../icons/PersonIcon';
import { classNames } from '../utils/classNames';

export const Navigation = () => {
  return (
    <div className={styles.navBar}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.logo}>FairStore</div>
        <div className={styles.right}>
          <SearchBar />
          <nav className={styles.links}>
            <Link activeClassName={styles.active} href="/">
              Home
            </Link>
            <Link activeClassName={styles.active} href="/products">
              Products
            </Link>
            <Link activeClassName={styles.active} href="/farmers">
              Farmers & Crafters
            </Link>
          </nav>
          <ShoppingCartIcon className={classNames(styles.cartIcon, styles.icon)} />
          <PersonIcon className={classNames(styles.personIcon, styles.icon)} />
        </div>
      </Wrapper>
    </div>
  );
};
