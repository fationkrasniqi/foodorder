import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    promocode: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const isAdded = state.products.some(function (productData) {
        return productData.product._id === action.payload.product._id;
      });

      if (!isAdded) {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    changeQuantity: (state, action) => {
      const index = state.products.findIndex((productData) => {
        return productData.product._id === action.payload.product._id;
      });

      state.products[index] = action.payload;
      if (action.payload.isIncrement) {
        state.total += action.payload.price;
      } else {
        state.total -= action.payload.price;
      }
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.products = state.products.filter(
        (productData) => productData.product._id !== action.payload.product._id
      );
      state.total -= action.payload.price * action.payload.quantity;
    },


    deleteProducts: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.total= 0;
      state.promocode= 0;
    }
    
  },
});

export const { addProduct, changeQuantity, deleteProduct, deleteProducts } = cartSlice.actions;
export default cartSlice.reducer;
