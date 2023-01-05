import { Product } from './product.model'

// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}


type example = Pick<Product, 'color' | 'description'>;

// type updateProduct = Partial<Product>;

export interface UpdateProductDto extends Partial<CreateProductDto>, Pick<Product, 'updatedAt'> {}{

}

//All is mandatory
type example2 = Required<Product>;

export interface FindProductDto extends Readonly<Partial<Product>> {}
