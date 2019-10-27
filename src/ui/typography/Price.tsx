import { h } from 'preact';
import styles from './Price.styl';
import { classNames } from '../../utils/classNames';

interface PriceProps {
  price: number;
  big?: boolean;
}

export const Price = ({ price, big = false }: PriceProps) => (
  <div className={classNames(styles.price, big && styles.big)}>
    <span className={styles.currency}>€</span>
    <span>{price}</span>
  </div>
);
