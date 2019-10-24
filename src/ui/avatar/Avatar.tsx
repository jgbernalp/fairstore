import { h } from "preact";
import styles from "./Avatar.styl";

interface AvatarProps {
  src: string;
}

export const Avatar = ({ src }: AvatarProps) => (
  <img src={src} className={styles.avatar} />
);
