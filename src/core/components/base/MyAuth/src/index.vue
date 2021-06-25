<script>
import { store } from '@/store'
import _intersectionWith from 'lodash/intersectionWith'
import _isEqual from 'lodash/isEqual'

const MyAuth = (props, { slots }) => {
  // Example:
  // store.state.auth.data.user.permissions: [1, 2, 3, 4]
  // this.allow: [1, 3, 5, 7]
  // _intersectionWith: [1, 3] => is allowed (has allowed permissions)

  const commonPermissions = _intersectionWith(
    props.allow,
    store.getters['auth/permissions'],
    _isEqual
  )

  return commonPermissions?.length > 0 ? slots?.default() : null
}

MyAuth.props = ['allow']

export default MyAuth
</script>
