import { httpRequest } from "../../http/httpService";

export const login = async (body) => {
  try {
    const res = await httpRequest(`/auth/login`, "POST", body);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
