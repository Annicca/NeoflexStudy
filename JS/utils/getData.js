import { instance } from "./instance.js";

export const getData = async (url) => {
  return instance
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.message);
    });
};
