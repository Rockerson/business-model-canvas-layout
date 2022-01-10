document.querySelectorAll(".modulo").forEach(function (elemento) {
  elemento.addEventListener("click", function () {
    this.classList.toggle("voltear");
  });
});
