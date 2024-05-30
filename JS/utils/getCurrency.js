import { currencyInstance } from "./instance.js";
import { showError } from "./showEror.js";

export const getCurrency = async (from, to = "RUB", amount = 1.0) => {
  try {
    const response = await currencyInstance.get(``, {
      params: {
        from: from,
        to: to,
        q: amount,
      },
    });
    return response.data;
  } catch (error) {
    showError(error);
  }
};
