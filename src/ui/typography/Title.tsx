import { h, JSX } from 'preact';
import styles from './Title.styl';
import { classNames } from '../../utils/classNames';

interface TitleProps {
  center?: boolean;
  noTopMargin?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
}

export const Title = ({
  children,
  className,
  center,
  noTopMargin,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}: TitleProps & JSX.HTMLAttributes) => {
  const centerStyle = center ? styles.center : undefined;
  const noTopMarginStyle = noTopMargin ? styles.noTop : undefined;
  if (h1) {
    return <h1 className={classNames(className, styles.h1, centerStyle, noTopMarginStyle)}>{children}</h1>;
  } else if (h2) {
    return <h2 className={classNames(className, styles.h2, centerStyle, noTopMarginStyle)}>{children}</h2>;
  } else if (h3) {
    return <h3 className={classNames(className, styles.h3, centerStyle, noTopMarginStyle)}>{children}</h3>;
  } else if (h4) {
    return <h4 className={classNames(className, styles.h4, centerStyle, noTopMarginStyle)}>{children}</h4>;
  } else if (h6) {
    return <h6 className={classNames(className, styles.h6, centerStyle, noTopMarginStyle)}>{children}</h6>;
  } else if (h5) {
    return <h5 className={classNames(className, styles.h5, centerStyle, noTopMarginStyle)}>{children}</h5>;
  }

  return <h1 className={classNames(className, styles.h1, centerStyle, noTopMarginStyle)}>{children}</h1>;
};
