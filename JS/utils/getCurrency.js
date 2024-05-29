const currencyInstance = axios.create({
  baseURL: "https://currency-exchange.p.rapidapi.com/exchange",
  timeout: 3000,
  headers: {
    "X-RapidAPI-Key": "b8f5c60439msh082149d3f0f9556p136bd7jsnc65ddf32c2a2",
    "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
  },
});

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
