export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  //   state.error = '';
};

export const handleFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = '';
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
}

