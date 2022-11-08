import { apiBaseUrl } from "../../../config/apiConfig";
import { httpRequest } from "../../http/httpService";

export const getApprovedSubmissions = async () => {
  const response = await httpRequest(`/submission/approve`, "GET");
  const data = await response.json();

  return data.submissions;
};

export const getNotApprovedSubmissions = async () => {
  const response = await httpRequest(`/submission/unapprove`, "GET");
  const data = await response.json();

  return data.submissions;
};

export const getRejectedSubmissions = async () => {
  const response = await httpRequest(`/submission/reject`, "GET");
  const data = await response.json();

  return data.submissions;
};

export const getSpecificSubmission = async (submissionId) => {
  const response = await httpRequest(`/submission/${submissionId}`, "GET");
  const data = await response.json();

  return data;
};

export const approveSubmission = async (submissionId) => {
  const response = await httpRequest(
    `/submission/approve/${submissionId}`,
    "PUT"
  );
  const data = await response.json();
  return data;
};

export const desapproveSubmission = async (submissionId) => {
  const response = await httpRequest(
    `/submission/unapprove/${submissionId}`,
    "PUT"
  );
  const data = await response.json();
  return data;
};

export const rejectSubmission = async (submissionId) => {
  const response = await httpRequest(
    `/submission/reject/${submissionId}`,
    "PUT"
  );
  const data = await response.json();
  return data.status;
};

export const deleteSubmission = async (submissionId) => {
  const response = await fetch(`/submission/${submissionId}`, "DELETE");
  const data = await response.json();
  return data.status;
};
