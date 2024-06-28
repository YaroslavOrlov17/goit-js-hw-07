const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;

  const values = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  if (!values.email || !values.password) {
    window.alert("All form fields must be filled in");
  } else {
    console.log(values);
  }
  event.currentTarget.reset();
}
