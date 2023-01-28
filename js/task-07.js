// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const input = document.querySelector("input");
console.log(input);
const text = document.querySelector("#text");
console.log(text);

input.addEventListener("input", changeSize);

function changeSize(element) {
  const a = element.currentTarget.value;
  text.style.fontSize = `${a}px`;
}
