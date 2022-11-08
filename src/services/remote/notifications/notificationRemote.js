import { apiBaseUrl } from "../../../config/apiConfig";
import { httpRequest } from "../../http/httpService";

export const createNotification = async (body) => {
  const res = await httpRequest(
    `/submission/notification`,
    "POST",
    JSON.stringify(body)
  );
  const data = await res.json();

  return data;
};

export const getQuantNotifications = async () => {
  const res = await httpRequest(`/submission/notification/count`, "GET");

  const data = await res.json();

  return data;
};

export const getNotifications = async () => {
  const res = await httpRequest(`/submission/notification/all`, "GET");
  const data = await res.json();

  return data;
};

export const getSpecificNotification = async (id) => {
  const res = await httpRequest(`/submission/notification/${id}`, "GET");
  const data = await res.json();

  return data;
};

export const deleteNotification = async (id) => {
  const res = await httpRequest(`/submission/notification/${id}`, "DELETE");
  const data = await res.json();

  return data.data;
};

export const updateNotification = async (id, body) => {
  const res = await httpRequest(`/submission/notification/${id}`, "PUT", JSON.stringify(body));
  const data = await res.json();

  return data.data;
};
