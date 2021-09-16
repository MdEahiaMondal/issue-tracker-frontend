import can from '../helpers/can'
import store from '../store/index'

export default function checkPermissions({next, router, from, to}) {
  const permissions = to.meta.permissions
  if (!from.name) {
    store.dispatch('user/setAuthUser')
      .then(res => {
        const canEnter = can(permissions)
        if (canEnter) {
          return next()
        }
        return router.push({name: 'home'})
      })
  } else {
    const canEnter = can(permissions)
    if (canEnter) {
      return next()
    }
    return router.push({name: 'home'})
  }
}
