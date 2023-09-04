import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
    isShow: false,
  };
  
  const uiSlice = createSlice({
    name: "ui",
    initialState: initialUIState,
    reducers: {
      toggleCart(state) {
        state.isShow = !state.isShow;
      },
    },
  });

  export const uiActions = uiSlice.actions;

  export default uiSlice;