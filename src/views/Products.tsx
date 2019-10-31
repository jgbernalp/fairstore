import { h, Fragment } from 'preact';
import { RoutableProps, Link } from 'preact-router';
import { ProductCard } from '../components/ProductCard';
import { Wrapper } from '../ui/containers/Wrapper';

import { products } from '../services/ProducstService';
import { ProductFilters } from '../components/ProductFilters';
import { Grid, GridAreaComponents } from '../ui/grid/Grid';

export const Products = (_: RoutableProps) => (
  <Wrapper verticalPadding="1rem">
    <Grid areas="filter productGrid" gridCols="200px 1fr">
      {({ Filter, ProductGrid }: GridAreaComponents) => (
        <Fragment>
          <Filter>
            <ProductFilters />
          </Filter>
          <ProductGrid>
            <Grid gridCols="repeat(auto-fill, minmax(200px, 1fr))" justifyContent="center">
              {products.map(product => (
                <Link href={`/products/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </Grid>
          </ProductGrid>
        </Fragment>
      )}
    </Grid>
  </Wrapper>
);
