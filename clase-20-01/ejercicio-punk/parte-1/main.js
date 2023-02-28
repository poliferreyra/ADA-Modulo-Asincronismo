const BASE_URL = "https://api.punkapi.com/v2/"

// const getData = ()=>{
//     fetch(`${BASE_URL}beers/random`)
//     .then((response)=>response.json())
//     .then((data)=>{
//         console.log(data)
//         document.querySelector("#img").src=data[0].image_url
//         document.querySelector(".card__title").textContent=data[0].tagline
//         document.querySelector(".card__description").textContent=data[0].description
//     })
// }
// getData()

// document.querySelector("#btn-random").addEventListener("click", getData)

const getData = async ()=>{
    try {
        const response = await fetch(`${BASE_URL}beers/random`)
        const data = await response.json()

        document.querySelector("#img").src=data[0].image_url
        document.querySelector(".card__title").textContent=data[0].tagline
        document.querySelector(".card__description").textContent=data[0].description
        
    } catch (error) {
        console.log(error)
        
    }
}

document.querySelector("#btn-random").addEventListener("click", getData)