// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const removeQuantityBtn = document.querySelector('[data-action="decrement"]');
const addQuantityBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
console.log(valueEl.textContent);

const counter = {
  value: 0,
  incValue() {
    this.value += 1;
  },
  decrValue() {
    this.value -= 1;
  },
};

addQuantityBtn.addEventListener("click", onButtonTargetClickAdd);
removeQuantityBtn.addEventListener("click", onButtonTargetClickRemove);

function onButtonTargetClickAdd() {
  counter.incValue();
  valueEl.textContent = counter.value;
}
function onButtonTargetClickRemove() {
  counter.decrValue();
  valueEl.textContent = counter.value;
}
