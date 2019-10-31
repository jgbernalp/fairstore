import { h, Fragment } from 'preact';
import styles from './ProductFilters.styl';
import { Title } from '../ui/typography/Title';

export const ProductFilters = () => {
  return (
    <Fragment>
      <div className={styles.filter}>
        <Title h5>Categories</Title>
        <div className={styles.categories}>
          <a href="#">Coffee</a>
          <a href="#">Vegetables</a>
          <a href="#">Fruits</a>
          <a href="#">Cheese</a>
          <a href="#">Bread</a>
          <a href="#">Cocoa</a>
        </div>
      </div>
      <div className={styles.filter}>
        <Title h5>Price</Title>
        <div className={styles.price}>
          <div className={styles.sliderContainer}>
            <input type="range" min="1" max="100" value="100" className={styles.slider} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
