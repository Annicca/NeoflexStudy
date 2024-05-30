import { currencyInstance } from "./instance.js";

export const getCurrency = async (from, to = "RUB", amount = 1.0) => {
  const response = await currencyInstance.get(``, {
    params: {
      from: from,
      to: to,
      q: amount,
    },
  });
  return response.data;
};
