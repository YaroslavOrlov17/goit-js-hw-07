function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = `${randomColor}`;
  spanText.textContent = `${randomColor}`;
}

button.addEventListener("click", changeBodyColor);
