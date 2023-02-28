const BASE_URL = "https://api.punkapi.com/v2/";

const beerContainer = document.querySelector("#container_beers")

const btnLow = document.querySelector("#btn-low")
const btnMd = document.querySelector("#btn-md")
const btnHg = document.querySelector("#btn-hg")
const btnAll = document.querySelector("#btn-all")

const getData = async ()=>{
    try {
      const response = await fetch(`${BASE_URL}beers?`)
      const data =  await response.json()
      console.log(data)
      renderCard(data)
    } catch (error) {
      console.log(error)
      
    }
  }
  getData()

  const filtroAbvLow = ()=>{
    // if(){
        
    // }
  }

  const renderCard = (beers)=>{
    // console.log(beers)
    beerContainer.innerHTML =""
    for (const {name, description, image_url} of beers) {
      beerContainer.innerHTML +=`
      <div id="card" class="card">
            <h2 class="card__title">${name}</h2>
            <img
              src="${image_url}"
              alt="beer"
              height="180"
            />
            <p class="card__description">
              ${description}
            </p>
          </div>
      `
      
    }
  
  }
  btnLow.addEventListener("click", filtroAbvLow);
  