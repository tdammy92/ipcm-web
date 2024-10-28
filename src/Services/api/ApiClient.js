
import axios from "axios";
import { BaseUrl } from "./BaseUrl";

export const ApiClient = async (
  url,
  { data={}, method = "GET", ...customConfig }
) => {
  let storage = JSON.parse(localStorage.getItem("persist:root"))?.users;

  let token = JSON.parse(storage)?.details?.token || "";


  const headers = {
    "content-type": "application/json",
    Authorization:!!token ? `Bearer ${token}` : '',
  };

  const config = {
    headers,
    method,
    data,
    url: `${BaseUrl}${url}`,
    ...customConfig,
  };

  try {
    const result = await axios(config);
    return result;
  } catch (error) {
    throw error;
  }
};
