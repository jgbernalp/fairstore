import { h, JSX } from 'preact';
import styles from './FlexRows.styl';
import { classNames } from '../../utils/classNames';

interface FlexColsProps {
  fill?: boolean;
}

export const FlexRows = ({ children, fill = false }: JSX.HTMLAttributes & FlexColsProps) => (
  <div className={classNames(styles.rows, fill ? styles.fill : 'auto')}>{children}</div>
);
