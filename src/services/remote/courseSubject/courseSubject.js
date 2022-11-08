import { apiBaseUrl } from "../../../config/apiConfig";
import { httpRequest } from "../../http/httpService";

export const createCourseSubject = async (body) => {
  const res = await httpRequest(`/association`, "POST", JSON.stringify(body));
  const data = await res.json();

  return data;
};

export const getCoursesSubjects = async () => {
  const res = await httpRequest(`/association`, "GET");

  const data = await res.json();

  return data.courses;
};

export const deleteCourseSubject = async (courseId) => {
  const res = await httpRequest(`/association/${courseId}`, "DELETE");
  const data = await res.json();

  return data.data;
};

export const updateCourseSubject = async (courseId, body) => {
  const res = await httpRequest(`/association/${courseId}`, "PUT", JSON.stringify(body));
  const data = await res.json();

  return data.data;
};
