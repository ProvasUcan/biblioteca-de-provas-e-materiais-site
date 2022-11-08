import { apiBaseUrl } from "../../../config/apiConfig";
import { httpRequest } from "../../http/httpService";

export const getAssigments = async (course, subject, documentType) => {
  const res = await httpRequest(
    `/course/${course}/${subject}/${documentType}`,
    "GET"
  );
  const data = await res.json();

  return data.result.filesUrls;
};

export const uploadAssigments = async (
  submissionArea,
  files,
  userIdentification = "anonymous"
) => {
  var form = new FormData();

  form.append("course", submissionArea.course);
  form.append("year", submissionArea.year);
  form.append("semestre", submissionArea.semestre);
  form.append("subject", submissionArea.subject);
  form.append("documentType", submissionArea.documentType);

  form.append("userEmail", userIdentification);

  for (
    let actualFileIndex = 0;
    actualFileIndex < files.length;
    actualFileIndex++
  ) {
    form.append("files", files[actualFileIndex]);
  }

  try {
    await httpRequest(`/submission/upload`, "POST", form);

    return true;
  } catch (error) {
    return false;
  }
};
