// Create div element
const myDiv = document.createElement("div");

const randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// Set text as content of the div
myDiv.textContent = randomText;

// Apply styles
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

// Media queries
const mediaQueryMobile = window.matchMedia("(max-width: 767px)");
const mediaQueryTablet = window.matchMedia(
  "(min-width: 768px) and (max-width: 1199px)"
);

// Function to handle the media query changes
function handleMediaQueryChange() {
  if (mediaQueryMobile.matches) {
    // For mobile (width < 768px)
    myDiv.style.width = "100% - 2rem";
  } else if (mediaQueryTablet.matches) {
    // For tablet (width  768px - 1199px)
    myDiv.style.width = "calc(66.66% - 2rem)";
  } else {
    // For devices with screen width >= 1200px
    myDiv.style.width = "calc(50% - 2rem)";
  }
}

// Add an event listener for the media query(they dont work properly when using script from the console)
mediaQueryMobile.addEventListener(handleMediaQueryChange);
mediaQueryTablet.addEventListener(handleMediaQueryChange);

// Function to insert the myDiv
function insertMyDiv() {
  const productsContainer = document.querySelector(".product-items"); // обираємо батьківський контейнер для продуктів
  const fourthProduct = productsContainer.querySelectorAll(".product-item")[3]; // отримуємо 4 продукт
  if (fourthProduct) {
    productsContainer.insertBefore(myDiv, fourthProduct.nextElementSibling);
  } else {
    // Handle the case where the fourth product is not found
    console.error("Fourth product not found.");
  }
}

insertMyDiv();

handleMediaQueryChange();
