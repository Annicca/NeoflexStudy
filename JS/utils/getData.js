import { instance } from "./instance.js";
import { showError } from "./showEror.js";

export const getData = async (url) => {
  return instance
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      showError(error);
    });
};
