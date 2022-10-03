import { apiBaseUrl } from "../../../config/apiConfig"

export const getApprovedSubmissions = async () => {
  const response = await fetch(`${apiBaseUrl}/submission/approve`,
  {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data  = await response.json();
  return data.submissions;
}


export const getNotApprovedSubmissions = async () => {
  const response = await fetch(`${apiBaseUrl}/submission/unapprove`,
  {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data  = await response.json();
  return data.submissions;
}

export const getRejectedSubmissions = async () => {
  const response = await fetch(`${apiBaseUrl}/submission/reject`,
  {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data  = await response.json();

  return data.submissions;
}

export const getSpecificSubmission = async (submissionId) => {
  const response = await fetch(`${apiBaseUrl}/submission/${submissionId}`,
  {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data  = await response.json();

  return data;
} 

export const approveSubmission = async (submissionId) => {
  const response = await fetch(`${apiBaseUrl}/submission/approve/${submissionId}`,
  {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data  = await response.json();
  return data;
}

export const desapproveSubmission = async (submissionId) => {
  const response = await fetch(`${apiBaseUrl}/submission/unapprove/${submissionId}`,
  {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data  = await response.json();
  return data;
}


export const rejectSubmission = async (submissionId) => {
  const response = await fetch(`${apiBaseUrl}/submission/reject/${submissionId}`,
  {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data  = await response.json();
  return data.status;
}

export const deleteSubmission = async (submissionId) => {
  const response = await fetch(`${apiBaseUrl}/submission/${submissionId}`,
  {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas')}`
    }
  })
  const data  = await response.json();
  return data.status;
}