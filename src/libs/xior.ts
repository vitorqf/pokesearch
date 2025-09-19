import xior from "xior";

export const api = xior.create({
  baseURL: process.env.API_URL,
});
