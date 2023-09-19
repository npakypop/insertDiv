// Створюємо дів єлеменнт
const myDiv = document.createElement("div");

const randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// втавляэмо текст у дів
myDiv.textContent = randomText;

// стилі для єлемента
myDiv.style.width = "100%";
myDiv.style.marginTop = "10px";
myDiv.style.marginBottom = "10px";
myDiv.style.padding = "6.5px";
myDiv.style.boxShadow = "0px 0px 6px 6px rgba(0, 0, 0, 0.1)";
myDiv.style.borderRadius = "10px";
myDiv.style.textAlign = "center";
myDiv.style.display = "flex";
myDiv.style.alignItems = "center";
myDiv.style.justifyContent = "center";

// створюю медіа запити
const mediaQueryMobile = window.matchMedia("(max-width: 767px)");
const mediaQueryTablet = window.matchMedia(
  "(min-width: 768px) and (max-width: 1199px)"
);

// Функція для обробки медіа запитів
function handleMediaQueryChange() {
  if (mediaQueryMobile.matches) {
    // Для мобільних (ширина < 768px)
    myDiv.style.width = "100% - 2rem"; // Займає всю ширину
  } else if (mediaQueryTablet.matches) {
    // Для планшетних пристроїв (ширина від 768px до 1199px)
    myDiv.style.width = "calc(66.66% - 2rem)"; // Займає 2/3 контейнера
  } else {
    // Для пристроїв с шириной єкрана 1200px та вище
    myDiv.style.width = "calc(50% - 2rem)"; // Займає 50% контейнера
  }
}

// Додаємо слухачів подій до медіа запитів
mediaQueryMobile.addEventListener(handleMediaQueryChange);
mediaQueryTablet.addEventListener(handleMediaQueryChange);

// функція для втавки єлемента
function insertMyDiv() {
  const productsContainer = document.querySelector(".product-items"); // обираємо батьківський контейнер для продуктів
  const fourthProduct = productsContainer.querySelectorAll(".product-item")[3]; // отримуємо 4 продукт
  if (fourthProduct) {
    productsContainer.insertBefore(myDiv, fourthProduct.nextElementSibling);
  } else {
    // обробляємо помілку в разі якщо не буде знайдено четвертого елемента
    console.error("Fourth product not found.");
  }
}

insertMyDiv();

handleMediaQueryChange();
