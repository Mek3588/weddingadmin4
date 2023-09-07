import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  email: "",
  firstName: "",
  _id: "",
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
      loginRedux: (state, action) => {
        const { _id,  email,  } = action.payload.data;
        state._id = _id;
        state.email = email;
       
      },
      logoutRedux: (state, action) => {
        state._id = "";
        state.email = "";
        
      },
    },
  });

  export const { loginRedux ,logoutRedux} = adminSlice.actions;

export default adminSlice.reducer;
