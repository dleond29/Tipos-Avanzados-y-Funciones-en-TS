
export const createProduct = (
  //Optional parameters must be at final
    id: string | number,
    stock: number = 10,
    isNew: boolean = true,
  ) => {
    return {
      id,
      stock,
      isNew,
    }
  }

  const p1 = createProduct(1, 12, true);
  console.log(p1);

  const p2 = createProduct(2);
  console.log(p2);

  const p3 = createProduct(3, 0, false);
  console.log(p3);

  const p4 = createProduct(1, 100, true);
  console.log(p4);

  const p5 = createProduct(1, 5);
  console.log(p5);
