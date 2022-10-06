
import { apiBaseUrl } from "../../../config/apiConfig";
import store from "../../../reducers/Store";

/*
1- See if we have the structure locale
  If has, make a request to know if the structure is the same from the server,
    if it's the same from the server only return the structure already stored
    if it's not the same structure update the local structure and update it
  if doesn't not have save the retrived from the server
*/
export const getAllCoursesStructure = async function () {
  const state = store.getState().search;
  let auxAllCoursesStructure;

  if (state.alreadyLoadedCourseStructure) {
    auxAllCoursesStructure = state.courseStructure;
  } else {
    auxAllCoursesStructure = await fetch(`${apiBaseUrl}/course/all`);
    auxAllCoursesStructure = await auxAllCoursesStructure.json();
    auxAllCoursesStructure = auxAllCoursesStructure.courses;

    store.dispatch({
      type: "search/update",
      payload: {
        alreadyLoadedCourseStructure: true,
        courseStructure: auxAllCoursesStructure,
      },
    });
  }

  return auxAllCoursesStructure;
};

export const createCourse = async (body) => {
  const res = await fetch(`${apiBaseUrl}/course`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(
        "auth-token-biblioteca-de-provas"
      )}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export const getCourses = async () => {
  const res = await fetch(`${apiBaseUrl}/course`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
        "auth-token-biblioteca-de-provas"
      )}`,
    },
  });
  const data = await res.json();

  return data.courses;
};

export const deleteCourse = async (courseId) => {
  const res = await fetch(`${apiBaseUrl}/course/${courseId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem(
        "auth-token-biblioteca-de-provas"
      )}`,
    },
  });
  const data = await res.json();

  return data.data;
};

export const updateCourse = async (courseId, body) => {
  const res = await fetch(`${apiBaseUrl}/course/${courseId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(
        "auth-token-biblioteca-de-provas"
      )}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data.data;
};
