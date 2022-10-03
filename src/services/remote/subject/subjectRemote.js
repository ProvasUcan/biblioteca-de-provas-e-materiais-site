import { apiBaseUrl } from "../../../config/apiConfig";

export const getAllSubjectsStructure = async function () {
  let auxAllSubjectsStructure = await fetch(`${apiBaseUrl}/subject/all`);
  auxAllSubjectsStructure = await auxAllSubjectsStructure.json();

  return auxAllSubjectsStructure.subjects;
}

export const createSubject = async (body) => {
  const res = await fetch(`${apiBaseUrl}/subject`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    },
    body: JSON.stringify(body)
  })
  const data = await res.json()

  return data;
}

export const getSubjects = async () => {
  const res = await fetch(`${apiBaseUrl}/subject`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data = await res.json()

  return data.subjects;
}

export const deleteSubject = async (subjectId) => {
  const res = await fetch(`${apiBaseUrl}/subject/${subjectId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data = await res.json()

  return data.data;
}

export const updateSubject = async (subjectId, body) => {
  const res = await fetch(`${apiBaseUrl}/subject/${subjectId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    },
    body: JSON.stringify(body)
  })
  const data = await res.json()

  return data.data;
}