const article = document.querySelector(".my-article");
const div = document.querySelector(".my-div");
const boton = document.querySelector(".my-button");

article.addEventListener("click", function () {
  console.log("hicimos click en " + article.classList);
});

div.addEventListener("click", function () {
  console.log("hicimos click en " + div.classList);
});

boton.addEventListener("click", function (event) {
  console.log("hicimos click en " + boton.classList);
});

document.body.addEventListener("click", function () {
  console.log("hicimos click en todo el body");
});
