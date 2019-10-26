import { h, ComponentChildren, JSX } from 'preact';
import styles from './Wrapper.styl';
import { classNames } from '../../utils/classNames';

export const Wrapper = ({ children, className }: { children: ComponentChildren } & JSX.HTMLAttributes) => (
  <div className={classNames(styles.wrapper, className)}>{children}</div>
);
