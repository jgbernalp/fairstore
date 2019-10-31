import { h, JSX } from 'preact';
import { Card } from '../ui/card/Card';
import { Product } from '../models/Product';
import { Title } from '../ui/typography/Title';
import { Price } from '../ui/typography/Price';
import styles from './ProductCard.styl';
import { Avatar } from '../ui/avatar/Avatar';
import { FlexRows } from '../ui/containers/FlexRows';
import { FlexCols } from '../ui/containers/FlexCols';

export interface ProcuctCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProcuctCardProps & JSX.HTMLAttributes) => {
  return (
    <Card>
      <img className={styles.img} src={product.image} />

      <FlexCols fill className={styles.container}>
        <FlexRows>
          <Title h6 noTopMargin className={styles.title}>
            {product.name}
          </Title>
          <Price price={product.price} />
        </FlexRows>
        <Avatar src={product.farmer.avatar} />
      </FlexCols>
    </Card>
  );
};
