import { faker } from '@faker-js/faker'
import { addProduct, products } from './products/product.service'

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.datatype.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    createAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    stock: faker.datatype.number({min: 10, max: 100}),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    },
  })
}

console.log(products);
