const BASE_URL = "https://api.punkapi.com/v2/";

// const getData = () => {
//   fetch(`${BASE_URL}beers`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
      
//     });
// };
// getData();

const beerContainer = document.querySelector("#beers")


const getData = async ()=>{
  try {
    const response = await fetch(`${BASE_URL}beers`)
    const data =  await response.json()
    //console.log(data)
    renderCard(data)
  } catch (error) {
    console.log(error)
    
  }
}
getData()

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
