import { h, ComponentChildren } from "preact";
import styles from "./FlexList.styl";

export const FlexList = ({ children }: { children: ComponentChildren }) => (
  <div className={styles.list}>{children}</div>
);
