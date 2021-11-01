import { apiBaseUrl } from "../../../config/apiConfig"

export const getActualUserData = async () => {
  await fetch(`${apiBaseUrl}/user`, {
    method: 'GET'
  })
  .then(res => res.json())
  .then(data => {
    return data
  })
  .catch(err => {
    console.log(err)
  })
}