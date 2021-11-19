import React, {useState, useEffect} from 'react'
import HomeAdminPage from '../../pages/Admin/HomeAdminPage'
import AdminGuard from '../../services/security/guards/adminGuard'

function MainAdminRouter({adminAuth}) {
  const [auth, setAuth] = useState(false)

  const handleAdminAuth = React.useCallback(async () => {
    const response = await adminAuth()

    setAuth(response)
  }, [adminAuth])

  useEffect(() => {
    handleAdminAuth()
  }, [handleAdminAuth])

  return (
    <>
      <AdminGuard path="/biblioteca-de-provas-e-materiais-site/admin" component={HomeAdminPage} auth={auth}></AdminGuard>
    </>
  )
}

export default MainAdminRouter
