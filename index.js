
const APIKEY = 'dd42ad9fb4914f379eb75519242305';
// http://api.weatherapi.com/v1/current.json?key=dd42ad9fb4914f379eb75519242305&q=London&aqi=yes

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');


// referencing output fields
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('countryName')
const localTime= document.getElementById('loc-time');
const temp = document.getElementById('temp')
const sup = document.getElementById('sup')

async function getData(KEY, city) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=dd42ad9fb4914f379eb75519242305&q=${city}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
      return null;
    }
  }

searchBtn.addEventListener('click', async ()=>{
    const input = cityInput.value;
    document.getElementById('outputCard').style.visibility ='visible';
    const result = await getData( APIKEY,input);
    cityName.innerText =  ` ${result.location.name}, ${result.location.region}`
    countryName.innerText = `${result.location.country}`
    temp.innerText = `${result.current.temp_c}`
    sup.innerText = '°C'
    localTime.innerText = `${result.location.localtime}`;
    


   

})
