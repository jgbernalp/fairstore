import { h, JSX } from 'preact';
import { classNames } from '../../utils/classNames';
import styles from './Button.styl';

interface ButtonProps {
  color?: 'primary' | 'secondary';
}

export const Button = ({ color = 'primary', children }: JSX.HTMLAttributes & ButtonProps) => (
  <button className={classNames(styles.button, styles[color])}>
    <span className={styles.container}>{children}</span>
  </button>
);
