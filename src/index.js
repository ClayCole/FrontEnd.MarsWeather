// const API_KEY = 'DEMO_KEY'
// const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`
// //^^ in this line we had to switch the text to insert out own api key ... so we can just post it later

// clicker for the previous day slider 
const previousWeatherToggle = document.querySelector('.show-previous-weather');

const previousWeather = document.querySelector('.previous-weather')

const currentSolElement = document.querySelector('[data-current-sol]')

previousWeatherToggle.addEventListener('click', () => {
    previousWeather.classList.toggle('show-weather')
})




// let selectedSolIndex;
// testWeather();


// getWeather().then(sols => {
//     selectedSolIndex = sols.length - 1 //will give us the last sol listed in array which would be the current day
//     console.log(sols)
// })

// function displaySelectedSol(sols) {
//     const selectedSol = sols[selectedSolIndex]
//     currentSolElement.innerText = selectedSol.sol

// }
// async function testWeather() {
//     let Result = await fetch(API_URL);
//     console.log(Result)
//     let data = await Result.json();
//     console.log(data)

// }
// function getWeather() {
//     return fetch(API_URL)
//       .then(res => res.json())
//       .then(data => {                // this is the data pulled from the api
//         const {
//             sol_keys,
//             validity_checks,
//             ...solData
//         } = data
//         console.log(solData)

//         let temp = Object.entries(solData).map(([sol,data])=>{
//             return{
//                 sol: sol,
//                 maxTemp: data.AT.mx,
//                 minTemp: data.AT.mn,
//                 windSpeed: data.HWS.av,
//                 windDirectionDegress: data.WD.most_common.compass_degrees,
//                 windDirectionCardinal: data.WD.most_common.compass_point,
//                 date: new Date(data.First_UTC)
//             }
//         })
//         console.log(temp)
//       })
// }

//^^ The previous API was no longer in service so had to switch plans 

