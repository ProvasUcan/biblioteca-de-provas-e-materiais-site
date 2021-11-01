import { apiBaseUrl } from "../../../config/apiConfig"

export const getAssigments = async (course, subject, document) => {
  const res = await fetch(`${apiBaseUrl}/course/${course}/${subject}/${document}`)
  const data = await res.json();

  return data.result.filesUrls;
}