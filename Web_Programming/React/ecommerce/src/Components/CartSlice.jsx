import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action){
      const existingItem = state.cartItems.find( item => item.id === action.payload.id );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({...action.payload, quantity: 1});
      }
    },
    removeItemFromCart(state, action){
      const item = state.cartItems.find( item => item.id === action.payload.id );

      if (item) {
        state.cartItems = state.cartItems.filter( product => product.id !== item.id )
      }
    },
    clearCart(state, action){
      state.cartItems = [];
    },
    increaseItemQuantity(state, action){
      state.cartItems.forEach( item => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
      } );
    },
    decreaseItemQuantityRed(state, action){

      const selectedItem = state.cartItems.find( item => item.id === action.payload.id );

      if (selectedItem) {
        selectedItem.quantity -= 1;

        if (selectedItem.quantity === 0) {
          state.cartItems = state.cartItems.filter( product => product.id !== selectedItem.id );
        }
      }
    },
  }
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity
} = CartSlice.actions;

export default CartSlice.reducer;
