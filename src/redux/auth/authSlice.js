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
      .addCase(logout.fulfilled, state => {
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
});

export default authSlice.reducer;
