import React, { useState, useEffect } from 'react'

import UserGuard from "../../services/security/guards/userGuard"
import { getActualUserData } from "../../services/remote/user/user";
import { UserPage } from "../../pages/UserPage/UserPage";
import { isValidToken } from "../../services/auth/authService";
import NotificationPage from '../../pages/NotificationPage/NotificationPage';

 
function MainPrivateRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const verifyTokenValidation = async () => {
    const res = await isValidToken()
    setIsAuthenticated(res)
  }

  useEffect(() => {
    verifyTokenValidation()
  }, [])

  return (
    <>
      <UserGuard path="/user" component={UserPage} auth={isAuthenticated} getUserInfo={getActualUserData}>
      </UserGuard>
      <UserGuard path="/notification/" component={NotificationPage} auth={isAuthenticated} getUserInfo={getActualUserData}>
      </UserGuard>
    </>
  )
}

export default MainPrivateRouter
