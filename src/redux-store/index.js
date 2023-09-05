import { configureStore } from "@reduxjs/toolkit";
import uiSlice from './ui-store'
import cartSlice from "./cart-store";

const store = configureStore({
    reducer: {
        ui : uiSlice.reducer,
        cart : cartSlice.reducer
    }
})

export default store;