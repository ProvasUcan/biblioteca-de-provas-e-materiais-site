import { apiBaseUrl } from "../../config/apiConfig";

const REQUEST_METHODS = ["PUT", "POST"];

export const httpRequest = async (
  endpoint = apiBaseUrl,
  method = "GET",
  body = JSON.stringify({}),
  headers = {}
) => {
  headers = {
    Authorization: `Bearer ${
      localStorage.getItem("auth-token-biblioteca-de-provas")
        ? localStorage.getItem("auth-token-biblioteca-de-provas")
        : ""
    }`,
    "Access-Control-Allow-Origin":
      headers["Access-Control-Allow-Origin"] === undefined
        ? "*"
        : headers["Access-Control-Allow-Origin"],
    ...headers,
  };

  if (REQUEST_METHODS.indexOf(method) !== -1) {
    console.log({
      url: `${apiBaseUrl}${endpoint}`,
      method,
      body,
      headers,
    });
    const response = await fetch(`${apiBaseUrl}${endpoint}`, {
      method,
      body,
      headers,
    });

    return response;
  } else {
    const response = await fetch(`${apiBaseUrl}${endpoint}`, {
      method,
      headers,
    });

    return response;
  }
};
