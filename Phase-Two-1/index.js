const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc5aebc4acmsh2540ee7d7a24a06p1f5edfjsn7a23b5845e0b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then(response => {
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            cloud_pct.innerHTML = response.cloud_pct;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunrise2.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
}

getWeather("Mumbai");

searchCity.addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('city');
    const cityValue = cityInput.value.trim();
    if (cityValue === "") {
        getWeather("Seattle");
    } else {
        getWeather(cityValue);
    }
});

// const getMumbai=(city)=>{
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
//         .then(response => response.json())
//         .then(response => {
//             mum_cloud_pct.innerHTML = response.cloud_pct;
//             mum_temp.innerHTML = response.temp;
//             mum_feels_like.innerHTML = response.feels_like;
//             mum_humidity.innerHTML = response.humidity;
//             mum_min_temp.innerHTML = response.min_temp;
//             mum_max_temp.innerHTML = response.max_temp; 
//             mum_wind_speed.innerHTML = response.wind_speed;
//             mum_wind_degrees.innerHTML = response.wind_degrees;
//             mum_sunrise.innerHTML = response.sunrise;
//             mum_sunset.innerHTML = response.sunset;
//         })
//         .catch(err => console.error(err));
// }
// getMumbai("mumbai")








































// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'fc5aebc4acmsh2540ee7d7a24a06p1f5edfjsn7a23b5845e0b',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };




// const getWeather=(city)=>{
//     cityName.innerHTML=city;
//     fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// }
// getWeather("Mumbai");

// searchCity.addEventListener("click",()=>{
//     if(city.value==""){
//         e.preventDefault();
//         getWeather(Seattle);
//     }else{
//         e.preventDefault();
//         getWeather(city.value);
//     }
// });
