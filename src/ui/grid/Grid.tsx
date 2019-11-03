import { h, JSX } from 'preact';
import styles from './Grid.styl';
import { classNames } from '../../utils/classNames';

export const Grid = ({ children, className }: JSX.HTMLAttributes) => (
  <div className={classNames(styles.grid, className)}>{children}</div>
);
