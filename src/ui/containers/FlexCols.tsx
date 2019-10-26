import { h, ComponentChildren, JSX } from 'preact';
import { classNames } from '../../utils/classNames';
import styles from './FlexCols.styl';

interface FlexColsProps {
  center?: boolean;
}

export const FlexCols = ({
  className,
  children,
  center,
}: { children: ComponentChildren } & JSX.HTMLAttributes & FlexColsProps) => (
  <div className={classNames(className, styles.cols, center && styles.center)}>{children}</div>
);
