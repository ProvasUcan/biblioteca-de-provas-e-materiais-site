import { apiBaseUrl } from "../../../config/apiConfig"

export const getActualUserData = async () => {
  const res = await fetch(`${apiBaseUrl}/user`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data = await res.json()

  return data;
}

export const getUserById = async (userId) => {
  const res = await fetch(`${apiBaseUrl}/user/${userId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data = await res.json()

  return data.data;
}

export const getContributors = async (userId) => {
  const res = await fetch(`${apiBaseUrl}/user/contributors`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data = await res.json()

  return data.data;
}

export const updateUser = async (userId, body) => {
  const res = await fetch(`${apiBaseUrl}/user/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    },
    body: JSON.stringify(body)
  })
  const data = await res.json()

  return data;
}