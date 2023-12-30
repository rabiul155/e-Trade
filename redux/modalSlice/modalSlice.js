const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  show: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShow: (state, action) => {
      console.log(action.payload);
      state.show = action.payload;
    },
  },
});

export const { setShow } = modalSlice.actions;

export default modalSlice.reducer;
