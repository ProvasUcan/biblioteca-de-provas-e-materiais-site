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
    console.log('Res ', res)
    setIsAuthenticated(res)
  }

  useEffect(() => {
    verifyTokenValidation()
  }, [])

  return (
    <>
      <UserGuard path="/biblioteca-de-provas-e-materiais-site/user" component={UserPage} auth={isAuthenticated} getUserInfo={getActualUserData}>
      </UserGuard>
      <UserGuard path="/biblioteca-de-provas-e-materiais-site/notification/" component={NotificationPage} auth={isAuthenticated} getUserInfo={getActualUserData}>
      </UserGuard>
    </>
  )
}

export default MainPrivateRouter
