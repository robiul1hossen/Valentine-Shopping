// GetElementById Function
function elementWithId(id) {
  return document.getElementById(id);
}
let isBlock = true;
document.getElementById("header-list-more").addEventListener("click", function () {
  const aboutList = elementWithId("about-list");

  // const check = (aboutList.style.display = "block");
  if (isBlock) {
    aboutList.style.display = "block";
    isBlock = false;
  } else {
    aboutList.style.display = "none";
    isBlock = true;
  }
});

const elements = document.querySelectorAll(".element");
let elementCount = 1;
setInterval(() => {
  elementCount++;
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");

  if (elementCount > elements.length) {
    elementCount = 1;
    elements[0].classList.add("current");
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 3000);

// Favorite Button
document.getElementById("favorite-btn").addEventListener("click", function () {
  const favoriteText = document.getElementById("favorite-text");

  if (isBlock) {
    favoriteText.style.display = "block";
    isBlock = false;
  } else {
    favoriteText.style.display = "none";
    isBlock = true;
  }
});
document.getElementById("delivery-btn").addEventListener("click", function () {
  const favoriteText = document.getElementById("delivery-text");

  if (isBlock) {
    favoriteText.style.display = "block";
    isBlock = false;
  } else {
    favoriteText.style.display = "none";
    isBlock = true;
  }
});

function eventListener(id, link) {
  document.getElementById(id).addEventListener("click", function () {
    window.open(link);
  });
}
eventListener("product1", "./product1.html");
eventListener("product2", "./product2.html");
eventListener("product3", "./product-3.html");
eventListener("product4", "./product4.html");
eventListener("product5", "./product5.html");
eventListener("product6", "./product6.html");
