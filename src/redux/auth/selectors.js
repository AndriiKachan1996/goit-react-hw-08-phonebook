export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
export const selectIsLoading = state => state.auth.isLoading;
export const selectToken = state => state.auth.token;

export const selectAuth = state => {
  const isLoggedIn = selectIsLoggedIn(state);
  const isRefreshing = selectIsRefreshing(state);
  const user = selectUser(state);
  const error = selectError(state);
  const isLoading = selectIsLoading(state);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    error,
    isLoading,
  };
};

// також це можна записати окремим хуком:
// import { useSelector } from 'react-redux';
// import {
//   selectUser,
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from 'redux/auth/selectors';

// export const useAuth = () => {
//   return {
//     isLoggedIn: useSelector(selectIsLoggedIn),
//     isRefreshing: useSelector(selectIsRefreshing),
//     user: useSelector(selectUser),
//   };
// };
// використання:  const { isLoggedIn } = useAuth();
// бере три селектора і повертає їх у вигляді одного об'єкту
