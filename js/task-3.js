const input = document.querySelector("#name-input");

const spanName = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
  return (spanName.textContent = event.currentTarget.value);
}
