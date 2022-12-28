
export const createProduct = (
//Optional parameters must be at final
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    // stock: stock || 10,
    // isNew: isNew || true,

    //Using nullish-coalescing to solve the problem
    stock: stock ?? 10,
    isNew: isNew ?? true,
  }
}

const p1 = createProduct(1, 12, true);
console.log(p1);

const p2 = createProduct(2);
console.log(p2);

// 0 === false
// '' === false
// false === false
const p3 = createProduct(3, 0, false);
console.log(p3);
