import { h } from 'preact';
import { RoutableProps } from 'preact-router';
import styles from './Home.styl';
import { Wrapper } from '../ui/containers/Wrapper';
import { Footer } from '../components/Footer';
import { Title } from '../ui/typography/Title';
import { FlexList } from '../ui/lists/FlexList';
import { latestProducts } from '../services/ProducstService';
import { ProductCard } from '../components/ProductCard';

export const Home = (props: RoutableProps) => (
  <div className={styles.home}>
    <div className={styles.hero}>
      <Wrapper>
        <div className={styles.heroText}>
          <Title h2>Be fair!</Title>
          <p>Buy crafted products direclty from the best farmers.</p>
        </div>
      </Wrapper>
    </div>
    <div className={styles.lastestProds}>
      <Wrapper>
        <Title className={styles.latestTitle} h4 center>Latest products</Title>
        <FlexList center>
          {latestProducts.map(product => (
            <ProductCard className={styles.latestProd} product={product} />
          ))}
        </FlexList>
      </Wrapper>
    </div>
    <Footer />
  </div>
);
