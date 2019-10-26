import { h, ComponentChildren, JSX } from 'preact';
import styles from './Title.styl';
import { classNames } from '../../utils/classNames';

interface TitleProps {
  center?: boolean;
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}: { children: ComponentChildren } & TitleProps & JSX.HTMLAttributes) => {
  const centerStyle = center ? styles.center : undefined;
  if (h1) {
    return <h1 className={classNames(className, styles.h1, centerStyle)}>{children}</h1>;
  } else if (h2) {
    return <h2 className={classNames(className, styles.h2, centerStyle)}>{children}</h2>;
  } else if (h3) {
    return <h3 className={classNames(className, styles.h3, centerStyle)}>{children}</h3>;
  } else if (h4) {
    return <h4 className={classNames(className, styles.h4, centerStyle)}>{children}</h4>;
  } else if (h6) {
    return <h6 className={classNames(className, styles.h6, centerStyle)}>{children}</h6>;
  } else if (h5) {
    return <h5 className={classNames(className, styles.h5, centerStyle)}>{children}</h5>;
  }

  return <h1 className={classNames(className, styles.h1, centerStyle)}>{children}</h1>;
};
