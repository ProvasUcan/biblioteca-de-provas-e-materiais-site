import { apiBaseUrl } from "../../config/apiConfig"
import { getActualUserData } from "../remote/user/user"

export const isValidToken = async () => {
  const res = await fetch(`${apiBaseUrl}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('auth-token-biblioteca-de-provas')
    }
  })
  const data = await res.json()

  return data.status === 200
}

export const isAdminUser = async () => {
    const res = await getActualUserData();
    if (res.data !== undefined) {
      return res.data.user.roles.includes('admin')
    }
    return false;
}