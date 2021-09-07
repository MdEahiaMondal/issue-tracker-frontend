import axios from 'axios'

export const setUserIsLoggedIn = ({commit}, payload) => {
  commit('SET_USER_IS_LOGGED_IN', payload)
}

export const login = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.post(' http://127.0.0.1:8000/api/login/', payload)
      .then(res => {
        localStorage.setItem('token', res.data.access_token)
        commit('SET_USER_IS_LOGGED_IN', true)
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const logout = ({commit}) => {
  return new Promise((resolve, reject) => {
    localStorage.removeItem('token')
    commit('SET_USER_IS_LOGGED_IN', false)
    resolve(true)
  })
}
