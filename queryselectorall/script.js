const lista = document.querySelectorAll(".lista");
console.log(lista, 123);

lista.forEach((elemento) => {
  console.log(elemento);
  elemento.textContent = "hola";
});
