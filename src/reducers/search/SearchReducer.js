const initialState = {
  alreadyLoadedCourseStructure: false,
  courseStructure: localStorage.getItem("all-course-structure"),
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "search/update":
      return {
        ...state,
        alreadyLoadedCourseStructure:
          action.payload.alreadyLoadedCourseStructure,
        courseStructure: action.payload.courseStructure,
      };
    case "search/get":
      return { ...state };
    default:
      return { ...state };
  }
};
