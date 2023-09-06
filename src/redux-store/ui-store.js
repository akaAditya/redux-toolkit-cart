import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
    isShow: false,
    showStatus: null 
  };
  
  const uiSlice = createSlice({
    name: "ui",
    initialState: initialUIState,
    reducers: {
      toggleCart(state) {
        state.isShow = !state.isShow;
      },
      showNotification(state, action) {
        state.showStatus = {
          status: action.payload.status,
          title : action.payload.title,
          message : action.payload.message          
        }
      }
    },
  });

  export const uiActions = uiSlice.actions;

  export default uiSlice;