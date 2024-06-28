function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector("#boxes");

const input = document.querySelector("#controls input");

const createButton = document.querySelector("button[data-create]");

const destroyButton = document.querySelector("button[data-destroy]");

createButton.addEventListener("click", haldleClickCreate);

function haldleClickCreate(event) {
  box.createElement((div.style.cssText = "width: 30px"), "height = 30px", "background-color");
}
