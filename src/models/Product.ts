import { Farmer } from './Farmer';

export interface Product {
  id: string;
  farmer: Farmer;
  name: string;
  image: string;
  price: number;
  description?: string;
}
