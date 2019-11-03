import { h } from 'preact';

import styles from './Footer.styl';
import { Wrapper } from '../ui/containers/Wrapper';
import { Title } from '../ui/typography/Title';

export const Footer = () => (
  <footer className={styles.footer}>
    <Wrapper>
      <Title className={styles.title} h5>
        Information
      </Title>
      <a href="#">About Us</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
    </Wrapper>
  </footer>
);
