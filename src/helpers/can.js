import store from '../store/index'

export default (permissions) => {
  const userPermissions = store.getters['user/authUser'].userPermissions
  let canEnter = false

  if (!permissions || !userPermissions) {
    return canEnter;
  }

  if (Array.isArray(permissions)) {
    permissions.forEach(permission => {
      if (userPermissions.includes(permission)){
        canEnter = true
      }
    })
  } else {
    return canEnter = userPermissions.includes(permissions)
  }
  return canEnter
}
