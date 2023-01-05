import { faker } from '@faker-js/faker';
import { Id } from '../base.model';
import { Product} from './product.model'
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto'



const getIndex = (id: Id) => products.findIndex(product => product.id === id);
const throwError = (error: string) => new Error(error);

export const products: Product[] = [];
export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: Id, changes: UpdateProductDto ): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  }
  return products[index]
}

export const findProducts = (dto: FindProductDto): Product[] => {
  //code
  // dto.color = 'blue';
  return products;


}


export const findProduct = (id: Id) => {
  const index: number = getIndex(id)
  index === -1 && throwError('Product not Found')
  return products[index]
}

export const deleteProduct = (id: Id) => {
  const index: number = getIndex(id)
  index === -1 && throwError('Product not Found')
  products.splice(index, 1)
  return id
}
