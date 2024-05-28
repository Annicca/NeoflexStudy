const showError = (input, message) => {
  const formGroup = input.parentElement;
  !formGroup.classList.contains("form__group_error") &&
    formGroup.classList.add("form__group_error");
  const error = formGroup.querySelector(".form__error");
  error.innerText = message;
};

const showSuccess = (input) => {
  const formGroup = input.parentElement;
  formGroup.classList.contains("form__group_error") &&
    formGroup.classList.remove("form__group_error");
  const error = formGroup.querySelector(".form__error");
  error.innerText = "";
};

const checkFio = (input) => {
  const regexp = /^[A-Za-zА-Яа-я\s]+$/;

  switch (true) {
    case input.value.trim() === "":
      showError(input, `Поле обязательно`);
      break;
    case !regexp.test(input.value):
      showError(input, "Поле должно сожержать только буквы");
      break;
    default:
      showSuccess(input);
      break;
  }
};

const checkPassword = (input) => {
  const hasNumber = /\d/;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  const minLength = 8;
  const maxLength = 20;

  switch (true) {
    case input.value.trim() === "":
      showError(input, `Поле обязательно`);
      break;
    case !hasNumber.test(input.value):
      showError(input, "Пароль должен содержать хотя бы одну цифру");
      break;
    case !hasSpecialChar.test(input.value):
      showError(
        input,
        "Пароль должен содержать хотя бы один специальный символ"
      );
      break;
    case input.value.length < minLength || input.value.length > maxLength:
      showError(
        input,
        `Пароль должен быть от ${minLength} до ${maxLength} символов`
      );
      break;
    default:
      showSuccess(input);
      break;
  }
};

const validateForm = (form) => {
  if (!form) return;

  const fio = form.querySelector("#fio");
  const password = form.querySelector("#password");

  if (!fio && !password) return;

  fio.addEventListener("input", function () {
    checkFio(this);
  });
  password.addEventListener("input", function () {
    checkPassword(this);
  });
};

const form = document.getElementById("form");

validateForm(form);
