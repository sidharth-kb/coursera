import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './CartSlice';

const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 35 }
  ]

  //const [disabledProducts, setDisabledProducts] = useState([]);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <>
      <div>
        <h2>Products</h2>
        <ul>
          {
            products.map( item => {
              return (
                <>
                  <li>
                    <span> { item.name } - { item.price }</span>
                    <button onClick={ () => handleAddToCart(item) }>Add to Cart</button>
                  </li>
                </>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default ProductList;
