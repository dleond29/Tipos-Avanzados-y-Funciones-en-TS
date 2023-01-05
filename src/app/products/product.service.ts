import { Id } from '../base.model';
import { Product } from './product.model'

export const products: Product[] = [];

const getIndex = (id: Id) => products.findIndex(product => product.id === id);
const throwError = (error: string) => new Error(error);


export const addProduct = (data: Product) => {
  //With readonly propertie, we can't overwrite the attributes
  // data.id = '234234';
  // data.createAt = new Date(1998,2,2)
  products.push(data);
}

export const updateProduct = (id: Id, changes: object) => {
  const index: number = getIndex(id)
  const product: Product = products[index]
 index === -1 && throwError('Product not Found')

  products[index] = {
    ...product,
    ...changes
  }
  return products[index]
}

export const deleteProduct = (id: Id) => {
  const index: number = getIndex(id)
  index === -1 && throwError('Product not Found')
  products.splice(index, 1)
  return id
}

export const findProduct = (id: Id) => {
  const index: number = getIndex(id)
  index === -1 && throwError('Product not Found')
  return products[index]
}
