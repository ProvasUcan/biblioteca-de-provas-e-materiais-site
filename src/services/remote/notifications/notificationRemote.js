import { apiBaseUrl } from "../../../config/apiConfig";

export const createNotification = async (body) => {
  const res = await fetch(`${apiBaseUrl}/submission/notification`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas') ? localStorage.getItem('auth-token-biblioteca-de-provas') : ''}`
    },
    body: JSON.stringify(body)
  })
  const data = await res.json()

  return data;
}

export const getQuantNotifications = async () => {
  const res = await fetch(`${apiBaseUrl}/submission/notification/count`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas') ? localStorage.getItem('auth-token-biblioteca-de-provas') : ''}`
    }
  })
  const data = await res.json()

  return data;
}

export const getNotifications = async () => {
  const res = await fetch(`${apiBaseUrl}/submission/notification/all`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas') ? localStorage.getItem('auth-token-biblioteca-de-provas') : ''}`
    }
  })
  const data = await res.json()

  return data;
}

export const getSpecificNotification = async (id) => {
  const res = await fetch(`${apiBaseUrl}/submission/notification/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas') ? localStorage.getItem('auth-token-biblioteca-de-provas') : ''}`
    }
  })
  const data = await res.json()

  return data;
}

export const deleteNotification = async (courseId) => {
  const res = await fetch(`${apiBaseUrl}/submission/notification/${courseId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas') ? localStorage.getItem('auth-token-biblioteca-de-provas') : ''}`
    }
  })
  const data = await res.json()

  return data.data;
}

export const updateNotification = async (courseId, body) => {
  const res = await fetch(`${apiBaseUrl}/submission/notification/${courseId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas') ? localStorage.getItem('auth-token-biblioteca-de-provas') : ''}`
    },
    body: JSON.stringify(body)
  })
  const data = await res.json()

  return data.data;
}