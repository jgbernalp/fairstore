import { h } from 'preact';
import { Product } from '../models/Product';
import { Title } from '../ui/typography/Title';
import styles from './ProductDetail.styl';
import { FlexCols } from '../ui/containers/FlexCols';
import { products } from '../services/ProducstService';
import { RoutableProps } from 'preact-router';
import { Wrapper } from '../ui/containers/Wrapper';
import { Price } from '../ui/typography/Price';
import { Button } from '../ui/buttons/Button';
import { AddToCartIcon } from '../icons/AddToCartIcon';
import { FlexRows } from '../ui/containers/FlexRows';
import { NumericStepper } from '../ui/numericStepper/NumericStepper';

interface ProductDetailProps {
  productId?: string;
}

export const ProductDetail = ({ productId }: ProductDetailProps & RoutableProps) => {
  const product = products.find(product => product.id === productId);

  const productView = (product: Product) => (
    <Wrapper className={styles.container}>
      <FlexCols>
        <div className={styles.image}>
          <img src={product.image} />
        </div>

        <FlexRows fill className={styles.right}>
          <div className={styles.details}>
            <Title h3 noTopMargin className={styles.name}>
              {product.name}
            </Title>
            <Price big price={product.price} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles.buttons}>
            <NumericStepper />
            <Button color="secondary">
              Add to cart
              <AddToCartIcon />
            </Button>
          </div>
        </FlexRows>
      </FlexCols>
    </Wrapper>
  );

  return product ? productView(product) : <Title h5>Product Not found</Title>;
};
