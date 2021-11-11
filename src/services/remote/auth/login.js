import { apiBaseUrl } from "../../../config/apiConfig"

export const login = async (body) => {
  try {
    const result = await fetch(`${apiBaseUrl}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await result.json()
  
    return data;
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}