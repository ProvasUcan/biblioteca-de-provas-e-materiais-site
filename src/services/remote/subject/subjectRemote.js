import { apiBaseUrl } from "../../../config/apiConfig";
import { httpRequest } from "../../http/httpService";

export const getAllSubjectsStructure = async function () {
  let auxAllSubjectsStructure = await httpRequest("/subject/all", "GET");
  auxAllSubjectsStructure = await auxAllSubjectsStructure.json();

  return auxAllSubjectsStructure.subjects;
};

export const createSubject = async (body) => {
  const res = await httpRequest("/subject", "POST", JSON.stringify(body));
  const data = await res.json();

  return data;
};

export const getSubjects = async () => {
  const res = await httpRequest("/subject", "GET");
  const data = await res.json();

  return data.subjects;
};

export const deleteSubject = async (subjectId) => {
  const res = await httpRequest(`/subject/${subjectId}`, "DELETE");
  const data = await res.json();

  return data.data;
};

export const updateSubject = async (subjectId, body) => {
  const res = await httpRequest(
    `/subject/${subjectId}`,
    "PUT",
    JSON.stringify(body)
  );
  const data = await res.json();

  return data.data;
};
