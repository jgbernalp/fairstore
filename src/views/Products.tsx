import { h } from 'preact';
import { RoutableProps, Link } from 'preact-router';
import { ProductCard } from '../components/ProductCard';
import { FlexList } from '../ui/lists/FlexList';
import { Product } from '../models/Product';
import { Wrapper } from '../ui/containers/Wrapper';

import styles from './Products.styl';
import { products } from '../services/ProducstService';
import { ProductFilters } from '../components/ProductFilters';
import { FlexCols } from '../ui/containers/FlexCols';

export const Products = (props: RoutableProps) => (
  <Wrapper>
    <FlexCols className={styles.colsContainer}>
      <ProductFilters />
      <FlexList>
        {products.map(product => (
          <Link href={`/products/${product.id}`}>
            <ProductCard className={styles.productCard} product={product} />
          </Link>
        ))}
      </FlexList>
    </FlexCols>
  </Wrapper>
);
