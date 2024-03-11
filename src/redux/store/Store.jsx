// store.js
import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../reducer_functions/AuthSlice';
import ProductSlice from '../reducer_functions/ProductSlice';



const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    products: ProductSlice,
  },
});

export default Store

