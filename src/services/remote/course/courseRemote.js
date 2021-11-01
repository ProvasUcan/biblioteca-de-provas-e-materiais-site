import { apiBaseUrl } from "../../../config/apiConfig";

export const getAllCoursesStructure = async function () {
  let auxAllCoursesStructure = await fetch(`${apiBaseUrl}/course/all`);
  auxAllCoursesStructure = await auxAllCoursesStructure.json();

  return auxAllCoursesStructure.courses;
}