const $ = (selector) => document.querySelector(selector);

let $input = $(".busqueda");
const $boton = $(".btn");
let $contenedorPersonaje = $(".contenedorPersonaje");
let $contenedorError = $(".contenedor-error");

const apiURL = "https://pokeapi.co/api/v2";

const traerPersonajes = (personaje = "") => {
  fetch(`${apiURL}/pokemon/${personaje}`, { method: "GET" })
    .then((response) => response.json())
    .then((dataPersonaje) => {
      //console.log(dataPersonaje);
      mostrarPersonaje(dataPersonaje);
    })
    .catch((error)=>{
      $contenedorError.innerHTML=`
      <div class="notification is-danger">
      <p> No existe el personaje o tienes un error de tipeo</p>
      </div>
      `
    })
};

const mostrarInput = () => {
  let inputPersonaje = $input.value;
  traerPersonajes(inputPersonaje);
};

$boton.addEventListener("click", mostrarInput);

const mostrarPersonaje = (infoPersonajes) => {
  console.log(infoPersonajes.name);
  $contenedorPersonaje.innerHTML = `
<div class="card" style="width: 18rem">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="${infoPersonajes.sprites.front_default}"
    >
    </figure>
    <h5 class="title is-5">Nombre: ${infoPersonajes.name.toUpperCase()}</h5>
    <h5 class="title is-5">Peso: ${infoPersonajes.weight}</h5>
  </div>
</div>
    `;
};
