import APIKit from "@/common/helpers/APIKit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSuccess: false,
  isLoading: true,
  isError: false,
  authError: "",
  user: {},
};

export const getUser = createAsyncThunk("auth/getUser", async () => {
  const result = await APIKit.getUserInfo();
  console.log("api slice", result.data);
  return result.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isError = action.payload.isError;
      state.isSuccess = action.payload.isSuccess;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        // state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.user = {};
      })
      .addCase(getUser.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        // state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = {};
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
