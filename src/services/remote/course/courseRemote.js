import { apiBaseUrl } from "../../../config/apiConfig";

export const getAllCoursesStructure = async function () {
  let auxAllCoursesStructure = await fetch(`${apiBaseUrl}/course/all`);
  auxAllCoursesStructure = await auxAllCoursesStructure.json();

  console.log('sksak ', auxAllCoursesStructure)
  return auxAllCoursesStructure.courses;
}

export const createCourse = async (body) => {
  const res = await fetch(`${apiBaseUrl}/course`, {
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

export const getCourses = async () => {
  const res = await fetch(`${apiBaseUrl}/course`, {
    method: 'GET',
    headers: {
      'auth-token': localStorage.getItem('auth-token-biblioteca-de-provas')
    }
  })
  const data = await res.json()
  console.log(data)

  return data.courses;
}

export const deleteCourse = async (courseId) => {
  const res = await fetch(`${apiBaseUrl}/course/${courseId}`, {
    method: 'DELETE',
    headers: {
      'auth-token': localStorage.getItem('auth-token-biblioteca-de-provas')
    }
  })
  const data = await res.json()

  return data.data;
}

export const updateCourse = async (courseId, body) => {
  const res = await fetch(`${apiBaseUrl}/course/${courseId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('auth-token-biblioteca-de-provas')
    },
    body: JSON.stringify(body)
  })
  const data = await res.json()
  console.log(data)

  return data.data;
}