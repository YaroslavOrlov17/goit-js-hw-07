function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector("#boxes");
const input = document.querySelector("#controls input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

createButton.addEventListener("click", handleClickCreate);

function handleClickCreate(event) {
  box.innerHTML = "";
  const amount = input.value;
  createBoxes(amount);
  input.value = "";
}

function createBoxes(amount) {
  let pxCount = 30;
  let htmlForBox = "";

  if (amount <= 100 && amount >= 1) {
    for (let i = 1; i <= amount; i += 1) {
      htmlForBox += `<div style="width: ${pxCount}px; height: ${pxCount}px; background-color: ${getRandomHexColor()};"></div>`;
      pxCount += 10;
    }
    box.insertAdjacentHTML("beforeend", htmlForBox);
  }
}

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  box.innerHTML = "";
}
