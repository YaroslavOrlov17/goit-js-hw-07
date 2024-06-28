const input = document.querySelector("#name-input");

const spanName = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
  const inputValue = event.currentTarget.value.trim();
  spanName.textContent = inputValue === "" ? "Anonymous" : inputValue;
}
