import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice';

const ShoppingCart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector( state => state.cart.cartItems );

  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseItemQuantity(item));
  }

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseItemQuantity(item));
  }

  const handleRemoveItem = (item) => {
    dispatch(removeItemFromCart(item));
  }

  return (
    <>
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {
            cartItems.map( item => {
              return (
                <li>
                  <span>({item.quantity}) {item.name} - ${item.price * item.quantity}</span>
                  <button onClick={ () => handleIncreaseQuantity(item) }>Increase Quantity</button>
                  <button onClick={ () => handleDecreaseQuantity(item) }>Decrease Quantity</button>
                  <button onClick={ () => handleRemoveItem(item) }>Remove Item</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={ handleClearCart() }>Clear Cart</button>
      </div>
    </>
  )
}

export default ShoppingCart;
