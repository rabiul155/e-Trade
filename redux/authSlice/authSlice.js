import APIKit from "@/common/helpers/APIKit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  isSuccess: false,
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
      state.loading = action.payload.loading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.loading = true;
        state.isError = false;
        state.isSuccess = false;
        state.user = {};
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = {};
        state.authError = action.error;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
