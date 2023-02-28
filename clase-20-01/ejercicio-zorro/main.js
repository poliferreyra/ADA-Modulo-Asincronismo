const BASE_URL = "https://randomfox.ca/floof/"

// const randomfox = ()=>{
//     fetch(BASE_URL)
//     .then((response)=>response.json())
//     .then((data)=>{
//         mostrarImg(data.image)
//     })
// }
// randomfox()

// const boton = document.querySelector("#btn");
// console.log(boton.getAttribute("id"))
// console.log(boton.id)
// const imgContenedor = document.querySelector("#img")
// console.log(img)

// const mostrarImg = (img)=>{
// imgContenedor.src = img
// }

// boton.addEventListener("click", randomfox)

const boton = document.querySelector("#btn");
const imgContenedor = document.querySelector("#img")

const randomfox = async ()=>{
    try {
        const response = await fetch(BASE_URL)
        const data = await response.json()
        mostrarImg(data.image)
    } catch (error) {
        alert("algo salió mal")
    
    }

}
randomfox()

const mostrarImg = (img)=>{
imgContenedor.src = img
}

boton.addEventListener("click", randomfox)