import http from "../http-common.js";

export const getAll = () => {
  return http.get("/");
};
