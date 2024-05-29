import { getCurrency } from "../utils/getCurrency.js";

const setCurrency = async (item) => {
  const currencyFrom = item.dataset.currency;
  const value = await getCurrency(currencyFrom);
  item.innerHTML = value.toFixed(2);
};

const setAllCurrency = () => {
  const currencyItems = document.querySelectorAll(".currency__value");
  if (!currencyItems.length) return;
  currencyItems.forEach((item) => setCurrency(item));
};

setAllCurrency();

const updateCurrency = setInterval(setAllCurrency, 1000 * 60 * 15);
