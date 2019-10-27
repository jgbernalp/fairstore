import { h, JSX } from 'preact';
import { classNames } from '../../utils/classNames';
import styles from './FlexCols.styl';

interface FlexColsProps {
  center?: boolean;
  fill?: boolean;
}

export const FlexCols = ({ className, children, center, fill }: JSX.HTMLAttributes & FlexColsProps) => (
  <div className={classNames(className, styles.cols, center && styles.center, fill && styles.fill)}>
    {children}
  </div>
);
