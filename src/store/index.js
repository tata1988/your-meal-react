import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";

export default configureStore({
    reducer: {
        category: categoryReducer,
    },
});