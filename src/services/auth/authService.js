import { apiBaseUrl } from "../../config/apiConfig"
import { getActualUserData } from "../remote/user/user"
import { httpRequest } from "../http/httpService"

export const isValidToken = async () => {
  const res = await httpRequest(`/auth`, "POST");
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