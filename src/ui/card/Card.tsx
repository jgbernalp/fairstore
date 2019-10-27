import { h, JSX } from 'preact';
import styles from './Card.styl';
import { classNames } from '../../utils/classNames';

export const Card = ({ children, className }: JSX.HTMLAttributes) => (
  <div className={classNames(styles.card, className)}>{children}</div>
);
