import { addProduct } from './products/product.service'

addProduct({
  id: '1',
  title: 'p1',
  createAt: new Date(),
  updateAt: new Date(),
  stock: 100,
  category: {
    id: '2',
    name: 'c1',
    createAt: new Date(),
    updateAt: new Date(),
  },
})
