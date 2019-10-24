import { Farmer } from "./Farmer";

export interface Product {
  farmer: Farmer;
  name: string;
  image: string;
  price: number;
}
