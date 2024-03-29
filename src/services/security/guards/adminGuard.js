import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const AdminGuard = ({component: Component, auth, ...rest}) => {
  return (
    <Route {...rest} render={(props) => {
      return (
        auth ? 
        <Component auth={auth} {...props}></Component> :
        <Redirect to="/"></Redirect>
      )
    }}>
    </Route>
  )
}

export default AdminGuard;