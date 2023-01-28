// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const submitForm = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");

submitForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  for (const input of inputs) {
    if (input.value === "") {
      return alert("All fields must be filled!");
    }
  }

  const data = event.currentTarget.elements;
  const user = {
    email: data.email.value,
    password: data.password.value,
  };
  console.log(user);

  event.target.reset();
}
