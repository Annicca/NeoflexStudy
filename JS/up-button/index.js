const upButton = document.getElementById("js-up");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (scrollY > 300) {
    upButton.classList.contains("up-button_hide") &&
      upButton.classList.remove("up-button_hide");
  } else {
    !upButton.classList.contains("up-button_hide") &&
      upButton.classList.add("up-button_hide");
  }
});

upButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
