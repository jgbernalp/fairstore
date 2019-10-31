import { h, JSX } from 'preact';
import styles from './Wrapper.styl';

interface WrapperProps {
  verticalPadding?: string;
}

export const Wrapper = ({ children, verticalPadding }: JSX.HTMLAttributes & WrapperProps) => {
  const topPaddingStyle = verticalPadding ? { 'padding-top': verticalPadding } : undefined;
  const bottomPaddingStyle = verticalPadding ? { 'padding-bottom': verticalPadding } : undefined;

  return (
    <div style={{ ...topPaddingStyle, ...bottomPaddingStyle }} className={styles.wrapper}>
      {children}
    </div>
  );
};
