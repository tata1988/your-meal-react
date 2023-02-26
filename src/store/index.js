import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice.js";

export default configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        order: orderReducer
    },

    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(localStorageMiddleware),
});