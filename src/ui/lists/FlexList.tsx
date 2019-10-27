import { h, JSX } from 'preact';
import styles from './FlexList.styl';
import { classNames } from '../../utils/classNames';

interface FlexListProps {
  fill?: boolean;
  center?: boolean;
}

export const FlexList = ({ children, className, fill, center }: JSX.HTMLAttributes & FlexListProps) => (
  <div
    className={classNames(
      styles.list,
      className,
      fill ? styles.fill : undefined,
      center ? styles.center : undefined,
    )}
  >
    {children}
  </div>
);
