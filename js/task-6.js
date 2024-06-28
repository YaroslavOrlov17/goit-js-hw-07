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
  const amount = input.value



  const createBoxes = (amount) => {
    let i

    const html = `<div class = "new-elem" ></div>`
    for (i = 1; i <= amount; i += 1)
      box.insertAdjacentHTML("beforeend", html)
  }
  console.log(box);

  createBoxes(amount)
}

