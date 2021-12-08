export function validateEmail(target, setEmail) {
  const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    target.value
  );
  if (!res && target.value !== "") {
    showError(target.parentElement, "Please check you email");
  } else {
    showSuccess(target.parentElement);
    setEmail(target.value.trim());
  }
}

function showError(el, msg) {
  const small = el.querySelector("small");
  const input = el.querySelector("input");
  input.classList.add("error");
  small.classList.add("error");
  small.innerText = msg;
}

function showSuccess(el) {
  const button = el.parentElement.parentElement.querySelector("button");
  button.disabled = false;
  const input = el.querySelector("input");
  const small = el.querySelector("small");
  input.classList.remove("error");
  small.classList.remove("error");
}
