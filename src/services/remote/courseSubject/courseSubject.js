import { apiBaseUrl } from "../../../config/apiConfig";

export const createCourseSubject = async (body) => {
  const res = await fetch(`${apiBaseUrl}/association`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('auth-token-biblioteca-de-provas')
    },
    body: JSON.stringify(body)
  })
  const data = await res.json()

  return data;
}

export const getCoursesSubjects = async () => {
  const res = await fetch(`${apiBaseUrl}/association`, {
    method: 'GET',
    headers: {
      'auth-token': localStorage.getItem('auth-token-biblioteca-de-provas')
    }
  })
  const data = await res.json()

  return data.courses;
}

export const deleteCourseSubject = async (courseId) => {
  const res = await fetch(`${apiBaseUrl}/association/${courseId}`, {
    method: 'DELETE',
    headers: {
      'auth-token': localStorage.getItem('auth-token-biblioteca-de-provas')
    }
  })
  const data = await res.json()

  return data.data;
}

export const updateCourseSubject = async (courseId, body) => {
  const res = await fetch(`${apiBaseUrl}/association/${courseId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('auth-token-biblioteca-de-provas')
    },
    body: JSON.stringify(body)
  })
  const data = await res.json()

  return data.data;
}