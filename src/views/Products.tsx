import { h } from "preact";
import { RoutableProps } from "preact-router";
import { ProductCard } from "../components/ProductCard";
import { FlexList } from "../ui/lists/FlexList";
import { Product } from "../models/Product";

const products: ReadonlyArray<Product> = [
  {
    name: "Avocado",
    image:
      "https://img.etimg.com/thumb/msid-69268059,width-643,imgsize-164253,resizemode-4/avocados.jpg",
    price: 100,
    farmer: {
      name: "Pedro",
      avatar:
        "https://media.istockphoto.com/photos/senior-farmercountryside-man-picture-id955895084?k=6&m=955895084&s=612x612&w=0&h=BZoADpECS7G8Xg-TGCYhvX2gDULjF-tHmAK4_eMWlOY="
    }
  },
  {
    name: "Coffee",
    image:
      "https://athome.starbucks.com/sites/site.prod.athome.starbucks.com/files/2019-06/CoffeeFinder_ArticleHeader_Desktop_1176x712.jpg",
    price: 200,
    farmer: {
      name: "Maria",
      avatar:
        "http://images.telemetro.com/internacionales/Campesina-Puerto-Rico-Nobel-FotoAFP_MEDIMA20160418_0264_31.jpg"
    }
  },
  {
    name: "Garlic",
    image: "https://cdn.editorchoice.com/wp-content/uploads/2019/07/garlic.jpg",
    price: 140,
    farmer: {
      name: "Pablo",
      avatar:
        "https://media.istockphoto.com/videos/portrait-of-young-farmer-in-hat-standing-at-field-of-organic-farm-and-video-id814387148?s=640x640"
    }
  }
];

export const Products = (props: RoutableProps) => (
  <div>
    <h2>Products</h2>
    <FlexList>
      {products.map(product => (
        <ProductCard product={product} />
      ))}
    </FlexList>
  </div>
);
