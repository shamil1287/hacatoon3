// Mock data for image URLs
const imageData = [
  "https://vchapmanstudio.com/cdn/shop/products/jolieprovencalbluefloral-27.jpg?v=1675715346",
  "https://i.pinimg.com/736x/fb/3a/11/fb3a11aa12f96e06fd0c21fb84b13b04.jpg",
  "https://i.pinimg.com/736x/4a/e9/f3/4ae9f3f205909dc9f6bdbb90912e6805.jpg",
  "https://yaminiya.ru/image/cache/catalog/image/data/Xalat/6u-96jwpdr0-1000x1000.jpg",
  "https://n1s1.hsmedia.ru/74/0b/e4/740be4d0423641f6852bf0a6daa09d20/450x665_0xac120003_8433982841585321500.jpg",
  "https://avatars.dzeninfra.ru/get-zen_doc/4348286/pub_606ae1da608d5c2073effd99_606ae282608d5c2073f0a6dc/scale_1200",
  "https://images.prom.ua/3113086141_w640_h640_zhenskij-kostyum-dvojka-na.jpg",
  "https://i.pinimg.com/236x/d0/9c/99/d09c9996fe686ff3777dc4ea0f42f663.jpg",
  "https://i.pinimg.com/736x/6d/11/83/6d1183f7a1be1a6989019a96f9872bcd.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMLLPRfWw2gjqSclMELkyWpWm6wVtHujxEIxashNR_wW-TccI8rldoCqWztMIjFYu7KM&usqp=CAU",
];

// Массив с описаниями для каждой карточки
const cardDescriptions = [
  "Рост модели на фото; 160 см Параметры модели на фото: 86-60-90 Особенности модели: немнущийся материал Страна производства: Россия Тип карманов: без карманов",
  "Представляем вам женскую базовую бельевую спортивную майку из мягкого хлопкаТоп идеально подходит для сочетания с различными предметами гардероба, такими как джинсы, юбки, брюки, пиджаки и спортивная одежда. Эта модель создана для комфортного повседневного ношения.",
  "Описание для карточки 3",
  "Описание для карточки 4",
  "Описание для карточки 5",
  "Описание для карточки 6",
  "Описание для карточки 7",
  "Описание для карточки 8",
  "Описание для карточки 9",
  "Описание для карточки 10",
];

// Функция для отображения карточек с описаниями
function displayCards(pageNumber) {
  cardContainer.innerHTML = ""; // Очищаем контейнер карточек

  const startIndex = (pageNumber - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  for (let i = startIndex; i < endIndex && i < imageData.length; i++) {
    const imageUrl = imageData[i];
    const description = cardDescriptions[i]; // Получаем описание для текущей карточки
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img src="${imageUrl}" alt="Image ${i + 1}">
            <div class="card-body">
                <h5>Card Title ${i + 1}</h5>
                <p>${description}</p> <!-- Добавляем описание -->
                <button class="watch-later-btn">Посмотреть позже</button>
            </div>
        `;
    cardContainer.appendChild(card);
  }
}

// При вызове функции displayCards передайте ей pageNumber, чтобы она могла отобразить карточки для этой страницы.

const cardsPerPage = 4; // Number of cards to display per page
const cardContainer = document.getElementById("cardContainer");
const paginationContainer = document.getElementById("pagination");

// // Display cards for the specified page
// function displayCards(pageNumber) {
//   cardContainer.innerHTML = ""; // Clear existing cards

//   const startIndex = (pageNumber - 1) * cardsPerPage;
//   const endIndex = startIndex + cardsPerPage;

//   for (let i = startIndex; i < endIndex && i < imageData.length; i++) {
//     const imageUrl = imageData[i];
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.innerHTML = `
//             <img src="${imageUrl}" alt="Image ${i + 1}">
//             <div class="card-body">
//                 <h5>Card Title ${i + 1}</h5>
//                 <p></p>
//                 <button class="watch-later-btn">Посмотреть позже</button>
//             </div>
//         `;
//     cardContainer.appendChild(card);
//   }
// }

// Function to handle adding item to cart
function addToCart() {
  // Here you can implement the logic to add the item to the cart
  console.log("Item added to cart!");
}

// Generate pagination links
function generatePaginationLinks() {
  const numPages = Math.ceil(imageData.length / cardsPerPage);
  paginationContainer.innerHTML = ""; // Clear existing pagination links

  for (let i = 1; i <= numPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.textContent = i;
    pageLink.addEventListener("click", function () {
      displayCards(i);
    });
    paginationContainer.appendChild(pageLink);
  }
}

// Initial page load
displayCards(1);
generatePaginationLinks();

// Event delegation for dynamically added buttons
cardContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("watch-later-btn")) {
    addToCart(); // Call addToCart function when "Посмотреть позже" button is clicked
  }
});
