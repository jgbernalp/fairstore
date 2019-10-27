import { h, JSX } from 'preact';
import styles from './Wrapper.styl';
import { classNames } from '../../utils/classNames';

export const Wrapper = ({ children, className }: JSX.HTMLAttributes) => (
  <div className={classNames(styles.wrapper, className)}>{children}</div>
);
