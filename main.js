// Получаем элементы формы и списка товаров
const form1 = document.getElementById("crud-form");
const productInput = document.getElementById("input-product");
const productList = document.getElementById("product-list");

// Добавляем обработчик события при отправке формы
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const productText = productInput.value.trim(); // Получаем название товара

  if (productText !== "") {
    // Создаем новый элемент списка
    const productItem = document.createElement("li");
    productItem.textContent = productText;

    // Создаем кнопку удаления товара
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.className = "delete-btn";

    // Добавляем обработчик события для удаления товара
    deleteButton.addEventListener("click", function () {
      productItem.remove();
    });

    // Добавляем кнопку удаления к элементу списка
    productItem.appendChild(deleteButton);

    // Добавляем элемент списка в список товаров
    productList.appendChild(productItem);

    // Очищаем поле ввода названия товара
    productInput.value = "";
  } else {
    alert("Введите название товара");
  }
});
// document.addEventListener("DOMContentLoaded", function () {
//   // Получаем элементы формы
//   const oneClickBtn = document.getElementById("register-one-click-btn");
//   const registrationForm = document.getElementById("registration-form");
//   const usernameInput = document.getElementById("input-username");
//   const passwordInput = document.getElementById("input-password");

//   // Добавляем обработчик клика по кнопке "Регистрация в один клик"
//   oneClickBtn.addEventListener("click", function () {
//     // Можно предположить, что пользователь был успешно зарегистрирован
//     alert("Вы успешно зарегистрированы в один клик!");

//     // Показываем форму регистрации для дополнительной информации
//     registrationForm.classList.remove("hidden");
//   });
// });

// // Получаем элементы формы и кнопки
// const authForm = document.getElementById("authForm");
// const authBtn = document.getElementById("authBtn");

// // Добавляем обработчик клика по кнопке "Sign up / Log in"
// authBtn.addEventListener("click", function (event) {
//   event.preventDefault();

//   const username = document.getElementById("usernameInp").value;
//   const email = document.getElementById("emailInp").value;
//   const password = document.getElementById("passwordInp").value;

//   if (username && email && password) {
//     // Здесь должен быть ваш код для регистрации или входа в систему
//     alert(
//       `Пользователь ${username} успешно зарегистрирован / вошел в систему!`
//     );
//   } else {
//     alert("Введите все необходимые данные");
//   }
// });

// register connections
const registerBtn = document.querySelector("#registerBtn");
const overlay = document.querySelector(".overlay");
const usernameInp = document.querySelector("#usernameInp");
const emailInp = document.querySelector("#emailInp");
const passwordInp = document.querySelector("#passwordInp");
const confirmInp = document.querySelector("#confirmInp");
const signUpBtn = document.querySelector("#signUp");
const form = document.querySelector(".form");
//! login
const loginForm = document.querySelector(".loginForm");
const emailLoginInp = document.querySelector("#loginEmailInp");
const passwordLoginInp = document.querySelector("#loginPasswordInp");
const loginTrigger = document.querySelector("#loginTrigger");
const modal = document.querySelectorAll(".modal");
const username = document.querySelector("#name");
const logoutBtn = document.querySelector("#logout");
