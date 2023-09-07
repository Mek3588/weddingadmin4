import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide";
import adminSlice from "./adminSlice";

export const store = configureStore({
    reducer: {
      admin: adminSlice,
      user : userSliceReducer,
      product : productSlideReducer
      
    },
  });