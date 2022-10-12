import { apiBaseUrl } from "../../../config/apiConfig"

export const getAssigments = async (course, subject, documentType) => {
  const res = await fetch(`${apiBaseUrl}/course/${course}/${subject}/${documentType}`)
  const data = await res.json();

  return data.result.filesUrls;
}

export const uploadAssigments = async (submissionArea, files, userIdentification = 'anonymous') => {
  var form = new FormData();

  console.log(submissionArea)

  form.append('course', submissionArea.course);
  form.append('year', submissionArea.year);
  form.append('semestre', submissionArea.semestre);
  form.append('subject', submissionArea.subject);
  form.append('documentType', submissionArea.documentType);

  form.append('userEmail', userIdentification);

  for (let actualFileIndex = 0; actualFileIndex < files.length; actualFileIndex++) {
    form.append('files', files[actualFileIndex]);
  }

  try {
    await fetch(`${apiBaseUrl}/submission/upload`, {
      method: "POST",
      body: form,
      mode: 'no-cors',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth-token-biblioteca-de-provas') ? localStorage.getItem('auth-token-biblioteca-de-provas') : ''}`
      }
    })
    return true;
  } catch (error) {
    return false;
  }
}