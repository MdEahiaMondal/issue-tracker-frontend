import axios from '../../../axios/index'

export const setUserIsLoggedIn = ({commit}, payload) => {
  commit('SET_USER_IS_LOGGED_IN', payload)
}

export const login = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('login/', payload)
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
export const register = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('register/', payload)
      .then(res => {
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

export const forgotPassword = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('password/forgot/', payload)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const resetPassword = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('password/reset/', payload)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}


export const setAuthUser = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.get('me')
      .then(res => {
        commit('SET_AUTH_USER', res.data.data)
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const saveUserChange = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('change-details', payload)
      .then(res => {
        commit('SET_AUTH_USER', res.data.data)
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const passwordChange = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('change-password', payload)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

