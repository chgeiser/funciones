let color = "";

document.addEventListener("keydown", function (event) {
    const tecla = event.key.toLowerCase(); // para manejar mayúsculas o minúsculas
    const divKey = document.querySelector("#key");

  if (tecla === "a") {
    color = 'pink';
    divKey.style.backgroundColor = color;
  } else if (tecla === "s") {
    color = 'orange';
    divKey.style.backgroundColor = color;
  } else if (tecla === "d") {
    color = 'lightblue';
    divKey.style.backgroundColor = color;
  } else if (tecla === "q") {
    crearDiv("purple");
  } else if (tecla === "w") {
    crearDiv("gray");
  } else if (tecla === "e") {
    crearDiv("brown");
  }
});

function crearDiv(colorNuevo) {
  const nuevo = document.createElement("div");
  nuevo.classList.add("nuevo-div");
  nuevo.style.backgroundColor = colorNuevo;
  document.body.appendChild(nuevo);
}
