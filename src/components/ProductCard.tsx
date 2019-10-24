import { h } from "preact";
// import styles from "./ProductCard.scss";
import { Card, CardContent } from "../ui/card/Card";
import { Product } from "../models/Product";
import { Title } from "../ui/typography/Title";
import { Price } from "../ui/typography/Price";
import styles from "./ProductCard.styl";
import { Avatar } from "../ui/avatar/Avatar";
import { FlexRows } from '../ui/containers/FlexRows';

export interface ProcuctCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProcuctCardProps) => {
  return (
    <Card>
      <img className={styles.img} src={product.image} />
      <CardContent>
        <FlexRows fill>
          <Title h6>{product.name}</Title>
          <Price price={product.price} />
        </FlexRows>
        <Avatar src={product.farmer.avatar} />
      </CardContent>
    </Card>
  );
};
