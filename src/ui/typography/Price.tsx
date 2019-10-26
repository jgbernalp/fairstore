import { h } from "preact";
import styles from "./Price.styl";

interface PriceProps {
  price: number;
}

export const Price = ({ price }: PriceProps) => (
  <div className={styles.price}>€{price}</div>
);
