import React, { useState, useEffect } from 'react'
import { getActualUserData } from '../../../services/remote/user/user';

function UserStatisticsPage() {
  const [quantUploads, setQuantUploads] = useState(0)

  const handleGetUserInfo = async () => {
    const res = await getActualUserData();

    console.log(res)
    if (res.data !== undefined) {
      const data = res.data.user;

      setQuantUploads(data.quantOfFilesUploaded)
    }
  }

  useEffect(() => {
    handleGetUserInfo()
  }, [])

  return (
    <div>
      <h2 className="user-statistics">Já fez o upload de {quantUploads}</h2>
    </div>
  )
}

export default UserStatisticsPage
