interface Product {
  name: string;
  price: number;
  quantity: number;
}

const printProduct = (product: Product): void => {
  console.log(`${product.name} - $${product.price}`);
};
