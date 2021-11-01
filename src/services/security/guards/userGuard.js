import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const UserGuard = ({ component: Component, auth, ...rest }) => {
  console.log(auth)
  return (
    <Route {...rest} render={(props) => (
      auth === true ? <Component {...props}></Component> : <Redirect to='/login' />
    )}>
    </Route>
  )
}
export default UserGuard;