export const instance = axios.create({
  timeout: 3000,
});

export const currencyInstance = axios.create({
  baseURL: "https://currency-exchange.p.rapidapi.com/exchange",
  timeout: 3000,
  headers: {
    "X-RapidAPI-Key": "b8f5c60439msh082149d3f0f9556p136bd7jsnc65ddf32c2a2",
    "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
  },
});
