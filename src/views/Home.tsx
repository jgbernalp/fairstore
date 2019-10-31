import { h } from 'preact';
import { RoutableProps, Link } from 'preact-router';
import styles from './Home.styl';
import { Wrapper } from '../ui/containers/Wrapper';
import { Title } from '../ui/typography/Title';
import { latestProducts } from '../services/ProducstService';
import { ProductCard } from '../components/ProductCard';
import { Grid } from '../ui/grid/Grid';

export const Home = (_: RoutableProps) => (
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
      <Wrapper verticalPadding="2rem">
        <Title className={styles.latestTitle} h4 center>
          Latest products
        </Title>
        <Grid gridCols="repeat(auto-fill, minmax(200px, 1fr))" justifyContent="center">
          {latestProducts.map(product => (
            <Link href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </Grid>
      </Wrapper>
    </div>
  </div>
);
