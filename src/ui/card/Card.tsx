import { h, ComponentChildren } from "preact";
import styles from "./Card.styl";

export const Card = ({ children }: { children?: ComponentChildren }) => (
  <div className={styles.card}>{children}</div>
);

export const CardContent = ({ children }: { children?: ComponentChildren }) => (
  <div className={styles.cardContent}>{children}</div>
);
