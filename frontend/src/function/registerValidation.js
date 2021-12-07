export function validateUsername(target, min, max, setUsername) {
  const res = /^[a-zA-Z0-9\s]+$/;
  const correct = target.value.trim().match(res);
  if (
    (target.value.length > 0 && target.value.length < min) ||
    target.value.length > max
  ) {
    showError(
      target.parentElement,
      `Username should not more than ${max} and less than ${min}`
    );
  } else if (correct === null && target.value !== "") {
    showError(
      target.parentElement,
      "Your username should contain only letters and numbers"
    );
  } else if (target.value === "") {
    setUsername(target.value);
    showSuccess(target.parentElement);
  } else {
    setUsername(target.value.trim());
    showSuccess(target.parentElement);
  }
}
export function validateRole(target, min, max, setRole) {
  const res = /^[a-zA-Z0-9\s]+$/;
  const correct = target.value.trim().match(res);
  if (
    (target.value.length > 0 && target.value.length < min) ||
    target.value.length > max
  ) {
    showError(
      target.parentElement,
      `Role should not more than ${max} and less than ${min}`
    );
  } else if (correct === null && target.value !== "") {
    showError(
      target.parentElement,
      "Your role should contain only letters and numbers"
    );
  } else if (target.value === "") {
    setRole(target.value);
    showSuccess(target.parentElement);
  } else {
    setRole(target.value.trim());
    showSuccess(target.parentElement);
  }
}

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
export function validatePassword(target, min, password2, setPassword) {
  if (target.value.length > 0 && password2.length > 0) {
    if (target.value !== password2) {
      showError(
        target.parentElement.parentElement,
        "Your Password are not identical"
      );
    } else {
      showSuccess(target.parentElement.parentElement);
      setPassword(target.value.trim());
    }
  } else if (target.value.length < min && target.value.length > 0) {
    showError(target.parentElement.parentElement, "Your Password is too short");
  } else {
    showSuccess(target.parentElement.parentElement);
    setPassword(target.value.trim());
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
  const input = el.querySelector("input");
  const small = el.querySelector("small");
  input.classList.remove("error");
  small.classList.remove("error");
}
