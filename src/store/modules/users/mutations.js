export const SET_USER_IS_LOGGED_IN = (state, payload) => {
  state.isLoggedIn = payload
}
export const SET_AUTH_USER = (state, payload) => {
  state.userInfo = payload
}
