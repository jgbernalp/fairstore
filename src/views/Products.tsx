import { h, Fragment } from 'preact';
import { RoutableProps, Link } from 'preact-router';
import { ProductCard } from '../components/ProductCard';
import { Wrapper } from '../ui/containers/Wrapper';

import { products } from '../services/ProducstService';
import { ProductFilters } from '../components/ProductFilters';
import { Grid } from '../ui/grid/Grid';

import styles from './Products.styl';

export const Products = (_: RoutableProps) => (
  <Wrapper verticalPadding="1rem">
    <Grid className={styles.productsContainerGrid} areas="filter productGrid">
      <div className={styles.filterArea}>
        <ProductFilters />
      </div>

      <Grid className={styles.productsGrid}>
        {products.map(product => (
          <Link href={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </Grid>
    </Grid>
  </Wrapper>
);
