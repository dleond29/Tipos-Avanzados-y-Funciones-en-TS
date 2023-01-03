import { Product } from './product.model'

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  //With readonly propertie, we can't overwrite the attributes
  // data.id = '234234';
  // data.createAt = new Date(1998,2,2)
  products.push(data);
}
