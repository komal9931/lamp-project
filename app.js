const button = document.querySelector("#btn");
const light = document.querySelector("#light");
button.addEventListener("click", (e) => {
  button.classList.toggle("active");
  light.classList.toggle("on");
});
