import { h, ComponentChildren } from "preact";
import styles from "./Title.styl";

interface TitleProps {
  h6?: boolean;
}

export const Title = ({
  children,
  h6
}: { children: ComponentChildren } & TitleProps) => {
  if (h6) {
    return <h6 className={styles.h6}>{children}</h6>;
  }

  return <h6 className={styles.h1}>{children}</h6>;
};
