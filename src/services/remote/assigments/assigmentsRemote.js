import { apiBaseUrl } from "../../../config/apiConfig"

export const getAssigments = async (course, subject, documentType) => {
  const res = await fetch(`${apiBaseUrl}/course/${course}/${subject}/${documentType}`)
  const data = await res.json();

  return data.result.filesUrls;
}

export const uploadAssigments = async (remoteDestFolder, files, userIdentification = 'anonymous') => {
  var form = new FormData();

  form.append('destFolder', remoteDestFolder);
  form.append('userEmail', userIdentification);

  for (let actualFileIndex = 0; actualFileIndex < files.length; actualFileIndex++) {
    form.append('files', files[actualFileIndex]);
  }

  try {
    const res = await fetch(`${apiBaseUrl}/submission/upload`, {
      method: "POST",
      body: form,
      headers: {
        'auth-token': localStorage.getItem('auth-token-biblioteca-de-provas')
      }
    })
    const data = await res.json();
    return true;
  } catch (error) {
    return false;
  }
}