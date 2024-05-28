let fruitsAndVegetables = [
  "Яблоко",
  "Банан",
  "Клубника",
  "Вишня",
  "Апельсин",
  "Морковь",
  "Картофель",
  "Лук",
  "Чеснок",
  "Свекла",
  "Томат",
  "Огурец",
  "Перец",
  "Баклажан",
  "Кабачок",
  "Груша",
  "Малина",
  "Арбуз",
  "Дыня",
  "Гранат",
];

const createListItem = (item) => {
  return `<li class="filter-list__item">${item}</li>`;
};

const displayList = (list) => {
  const listElement = document.getElementById("js-filter-list");
  if (!listElement) return;

  listElement.innerHTML = list.map(createListItem).join("");
};

const filteredList = (list, searchValue) => {
  console.log(searchValue);
  list = list.filter((item) =>
    item.toLowerCase().includes(searchValue.trim().toLowerCase())
  );
  displayList(list);
};

const filterStart = () => {
  const form = document.getElementById("filter");
  if (!form) return;

  const searchInput = form.querySelector("#search");
  if (!searchInput) return;

  displayList(fruitsAndVegetables);

  searchInput.addEventListener("input", function () {
    filteredList(fruitsAndVegetables, this.value);
  });
};

filterStart();
