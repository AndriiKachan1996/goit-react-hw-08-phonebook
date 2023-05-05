import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from 'redux/auth/operations';
import { handleFulfilled, handlePending, handleRejected } from './services';
const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected),
        handleRejected
      );
  },
  // {
  // [register.fulfilled](state, action) {
  //   state.user = action.payload.user;
  //   state.token = action.payload.token;
  //   state.isLoggedIn = true;
  // },
  // [login.fulfilled](state, action) {
  //   state.user = action.payload.user;
  //   state.token = action.payload.token;
  //   state.isLoggedIn = true;
  // },
  // // написать общ фкцию и переписать на билдер
  // [logout.fulfilled](state, action) {
  //   state.user = { name: null, email: null };
  //   state.token = null;
  //   state.isLoggedIn = false;
  // },
  // [refreshUser.pending](state) {
  //   state.isRefreshing = true;
  // },
  // [refreshUser.fulfilled](state, action) {
  //   state.user = { ...action.payload };
  //   state.isLoggedIn = true;
  //   state.isRefreshing = false;
  // },
  // [refreshUser.rejected](state) {
  //   state.isRefreshing = false;
  // },
  // },
});

export default authSlice.reducer;
