import { apiBaseUrl } from "../../config/apiConfig"

export const isValidToken = async () => {
  await fetch(`${apiBaseUrl}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    return data.status === 200
  })
  .catch(err => {
    console.error(err)
  })
  return false
}

export const isTheCorrectAccout = async () => {

}