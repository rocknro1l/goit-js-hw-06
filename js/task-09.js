// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const button = document.querySelector("button");
const body = document.querySelector("body");
const color = document.querySelector(".color");

button.addEventListener("click", changeBgColor);

function changeBgColor() {
  body.style.backgroundColor = getRandomHexColor();
  color.innerHTML = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
