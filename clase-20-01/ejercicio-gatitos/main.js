const BASE_URL = "https://api.thecatapi.com/v1/images/search"

console.log(fetch(BASE_URL))

const getData = ()=>{
    fetch(`${BASE_URL}?limit=10`)
    .then((response)=>response.json())
    .then((data)=>{
        //console.log(data[0].url)
    contenedorImgUno.src = data[0].url
    contenedorImgDos.src = data[1].url
    })
}
getData()

const boton = document.querySelector("#btn")
const contenedorImgUno = document.querySelector("#img1")
const contenedorImgDos = document.querySelector("#img2")

boton.addEventListener("click", getData)
