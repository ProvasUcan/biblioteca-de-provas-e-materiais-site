import { apiBaseUrl } from "../../../config/apiConfig";
import { httpRequest } from "../../http/httpService";

export const getActualUserData = async () => {
  const res = await httpRequest(`/user`, "GET");
  const data = await res.json();

  return data;
};

export const getUserById = async (userId) => {
  const res = await httpRequest(`/user/${userId}`, "GET");
  const data = await res.json();

  return data.data;
};

export const getContributors = async (userId) => {
  const res = await httpRequest(`/user/contributors`, "GET");
  const data = await res.json();

  return data.data;
};

export const updateUser = async (userId, body) => {
  const res = await httpRequest(
    `${apiBaseUrl}/user/${userId}`,
    "PUT",
    JSON.stringify(body)
  );
  const data = await res.json();

  return data;
};
