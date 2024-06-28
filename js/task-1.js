const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  const elementsCount = category.querySelectorAll("ul li").length;
  console.log(`Elements: ${elementsCount}`);
});
