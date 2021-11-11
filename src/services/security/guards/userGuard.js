import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const UserGuard = ({ component: Component, auth, getUserInfo, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      return (auth === true ? <Component getUserInfo={getUserInfo} {...props}></Component> : <Redirect to='/biblioteca-de-provas-e-materiais-site/login' />)
    }
    }>
    </Route>
  )
}
export default UserGuard;