type Sizes = 'S' | 'M' | 'L' | 'XL';

//It could not be extended
// type Product = {
//   id: string | number;
//   title: string;
//   createAt: Date;
//   stock: number;
//   size?: Sizes;
// }

//Could be extended
interface Product {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createAt: new Date(),
  stock: 100,
})

const addProduct = (data: Product) => {
  products.push(data);
}
