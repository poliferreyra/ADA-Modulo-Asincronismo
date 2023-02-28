const BASE_URL = "https://yesno.wtf/api";

// const getData = ()=>{
//     document.querySelector("#btn").textContent= "Cargando ..."
//     document.querySelector("#btn").setAttribute("disabled", true)

//     fetch(BASE_URL)
//     .then((response)=> response.json())
//     .then((data)=>{
//         console.log(data)
//         document.querySelector("#img").src = data.image
//         document.querySelector("#res").textContent = data.answer

//     })
//     .finally(()=>{
//         document.querySelector("#btn").textContent= "Lanzar Moneda"
//         document.querySelector("#btn").removeAttribute("disabled")
//     })

// }

// document.querySelector("#btn").addEventListener("click", getData)

const getData = async () => {
    try {
    document.querySelector("#btn").textContent = "Cargando ...";
    document.querySelector("#btn").setAttribute("disabled", true);

    const response = await fetch(BASE_URL);
    const data = await response.json();
    document.querySelector("#img").src = data.image;
    document.querySelector("#res").textContent = data.answer;
  } catch (error) {
    console.log("algo salio mal")
  }
  finally{
            document.querySelector("#btn").textContent= "Lanzar Moneda"
            document.querySelector("#btn").removeAttribute("disabled")
        }
};

document.querySelector("#btn").addEventListener("click", getData)