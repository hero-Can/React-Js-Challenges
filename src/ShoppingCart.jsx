import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    let copyProducts = [...products];
    copyProducts[productId].count = products[productId].count + 1 ;
    setProducts(copyProducts);
  }

  function handleDecreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId && product.count > 0) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    }))
  }

  return (
    <>
    <h1 className="text-3xl font-bold underline bg-indigo-600 p-5 m-5 text-amber-50">
    Update an item in the shopping cart 
      </h1>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button className='ml-2 bg-gray-400 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-semibold transition duration-200 my-1' onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>

          <button className='ml-2 bg-gray-400 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-semibold transition duration-200 my-1' onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            -
          </button>
        </li>
      ))}
    </ul>
    </>
  );
}
