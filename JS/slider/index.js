import { getData } from "../utils/getData.js";

const disabledBtn = (btn) => {
  !btn.classList.contains("slider__button_disabled") &&
    btn.classList.add("slider__button_disabled");
};

const enabledBtn = (btn) => {
  btn.classList.contains("slider__button_disabled") &&
    btn.classList.remove("slider__button_disabled");
};

const sliderGo = (slider, step) => {
  const prevButton = document.getElementById("js-prev");
  const nextButton = document.getElementById("js-next");

  if (!prevButton && !nextButton) return;

  const nextScroll = () => {
    slider.scrollBy(step, 0);
  };

  const prevScroll = () => {
    slider.scrollBy(-1 * step, 0);
  };

  const onScroll = () => {
    if (slider.scrollLeft === 0) {
      prevButton.removeEventListener("click", prevScroll);
      disabledBtn(prevButton);
    } else {
      prevButton.addEventListener("click", prevScroll);
      enabledBtn(prevButton);
    }

    if (
      Math.round(slider.scrollLeft) ===
      slider.scrollWidth - slider.clientWidth
    ) {
      nextButton.removeEventListener("click", nextScroll);
      disabledBtn(nextButton);
    } else {
      nextButton.addEventListener("click", nextScroll);
      enabledBtn(nextButton);
    }
  };

  prevButton.addEventListener("click", prevScroll);

  nextButton.addEventListener("click", nextScroll);

  slider.addEventListener("scroll", onScroll);
};

const createSlide = (slide) => {
  return `
          <li class="slider__item slider__item_active">
              <img class="slider__img" src=${slide.url} alt=${slide.title} />
              <div>${slide.title}</div>
          </li>
      `;
};

const displaySlider = async () => {
  const slides = await getData(
    "https://jsonplaceholder.typicode.com/photos?_limit=10"
  );
  if (!slides) return;

  const slider = document.getElementById("js-slider");
  if (!slider) return;

  slider.innerHTML = slides.map(createSlide).join("");

  const step = (slider.scrollWidth / Array.from(slides).length) * 2;

  sliderGo(slider, step);
};

displaySlider();
