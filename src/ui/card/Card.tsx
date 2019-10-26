import { h, ComponentChildren, JSX } from 'preact';
import styles from './Card.styl';
import { classNames } from '../../utils/classNames';

export const Card = ({ children, className }: { children?: ComponentChildren } & JSX.HTMLAttributes) => (
  <div className={classNames(styles.card, className)}>{children}</div>
);

export const CardContent = ({ children }: { children?: ComponentChildren }) => (
  <div className={styles.cardContent}>{children}</div>
);
