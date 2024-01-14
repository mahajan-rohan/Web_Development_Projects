
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cfb4be54c6msh5292d21c0bca1e0p150f6bjsn70f32c8aadb1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	fetch(url + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);
			cityName.innerHTML = city;
			cloud_pct.innerHTML = response.cloud_pct;
			temp.innerHTML = response.temp;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			let timestamp = response.sunrise;
			let dateObject = new Date(timestamp * 1000); 
			let hours = dateObject.getHours();
			let minutes = dateObject.getMinutes();
			let sunR=`${hours}:${minutes} am`;
			sunrise.innerHTML = sunR;
			let timestamp2 = response.sunset;
			let dateObject2 = new Date(timestamp2*1000);
			let hours2 = dateObject2.getHours();
			let mins = dateObject2.getMinutes();
			let sunS =`${hours2-12}:${mins} pm`;
			sunset.innerHTML = sunS;
		})
		.catch(err => console.log(err));
};

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value)
})

getWeather("Gadhinglaj")

fetch(url + "Delhi", options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		
		cloudD.innerHTML = response.cloud_pct;
		tempD.innerHTML = response.temp;
		feelsD.innerHTML = response.feels_like;
		humD.innerHTML = response.humidity;
		minTD.innerHTML = response.min_temp;
		maxTD.innerHTML = response.max_temp;
		windDD.innerHTML = response.wind_speed;
		windSD.innerHTML = response.wind_speed;
		let timestamp = response.sunrise;
		let dateObject = new Date(timestamp * 1000); 
		let hours = dateObject.getHours();
		let minutes = dateObject.getMinutes();
		let sunR=`${hours}:${minutes} am`;
		sunRD.innerHTML = sunR;
		let timestamp2 = response.sunset;
		let dateObject2 = new Date(timestamp2*1000);
		let hours2 = dateObject2.getHours();
		let mins = dateObject2.getMinutes();
		let sunS =`${hours2-12}:${mins} pm`;
		sunSD.innerHTML = sunS;
	})
	.catch(err => console.log(err));


fetch(url + "Mumbai", options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		
		cloudM.innerHTML = response.cloud_pct;
		tempM.innerHTML = response.temp;
		feelsM.innerHTML = response.feels_like;
		humM.innerHTML = response.humidity;
		minTM.innerHTML = response.min_temp;
		maxTM.innerHTML = response.max_temp;
		windDM.innerHTML = response.wind_speed;
		windSM.innerHTML = response.wind_speed;
		let timestamp = response.sunrise;
		let dateObject = new Date(timestamp * 1000); 
		let hours = dateObject.getHours();
		let minutes = dateObject.getMinutes();
		let sunR=`${hours}:${minutes} am`;
		sunRM.innerHTML = sunR;
		let timestamp2 = response.sunset;
		let dateObject2 = new Date(timestamp2*1000);
		let hours2 = dateObject2.getHours();
		let mins = dateObject2.getMinutes();
		let sunS =`${hours2-12}:${mins} pm`;
		sunSM.innerHTML = sunS;
	})
	.catch(err => console.log(err));

fetch(url + "Pune", options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		
		cloudP.innerHTML = response.cloud_pct;
		tempP.innerHTML = response.temp;
		feelsP.innerHTML = response.feels_like;
		humP.innerHTML = response.humidity;
		minTP.innerHTML = response.min_temp;
		maxTP.innerHTML = response.max_temp;
		windDP.innerHTML = response.wind_speed;
		windSP.innerHTML = response.wind_speed;
		let timestamp = response.sunrise;
		let dateObject = new Date(timestamp * 1000); 
		let hours = dateObject.getHours();
		let minutes = dateObject.getMinutes();
		let sunR=`${hours}:${minutes} am`;
		sunRP.innerHTML = sunR;
		let timestamp2 = response.sunset;
		let dateObject2 = new Date(timestamp2*1000);
		let hours2 = dateObject2.getHours();
		let mins = dateObject2.getMinutes();
		let sunS =`${hours2-12}:${mins} pm`;
		sunSP.innerHTML = sunS;
	})
	.catch(err => console.log(err));
	
fetch(url + "Nashik", options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		
		cloudN.innerHTML = response.cloud_pct;
		tempN.innerHTML = response.temp;
		feelsN.innerHTML = response.feels_like;
		humN.innerHTML = response.humidity;
		minTN.innerHTML = response.min_temp;
		maxTN.innerHTML = response.max_temp;
		windDN.innerHTML = response.wind_speed;
		windSN.innerHTML = response.wind_speed;
		let timestamp = response.sunrise;
		let dateObject = new Date(timestamp * 1000); 
		let hours = dateObject.getHours();
		let minutes = dateObject.getMinutes();
		let sunR=`${hours}:${minutes} am`;
		sunRN.innerHTML = sunR;
		let timestamp2 = response.sunset;
		let dateObject2 = new Date(timestamp2*1000);
		let hours2 = dateObject2.getHours();
		let mins = dateObject2.getMinutes();
		let sunS =`${hours2-12}:${mins} pm`;
		sunSN.innerHTML = sunS;
	})
	.catch(err => console.log(err));
	

fetch(url + "Kolhapur", options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		
		cloudK.innerHTML = response.cloud_pct;
		tempK.innerHTML = response.temp;
		feelsK.innerHTML = response.feels_like;
		humK.innerHTML = response.humidity;
		minTK.innerHTML = response.min_temp;
		maxTK.innerHTML = response.max_temp;
		windDK.innerHTML = response.wind_speed;
		windSK.innerHTML = response.wind_speed;
		let timestamp = response.sunrise;
		let dateObject = new Date(timestamp * 1000); 
		let hours = dateObject.getHours();
		let minutes = dateObject.getMinutes();
		let sunR=`${hours}:${minutes} am`;
		sunRK.innerHTML = sunR;
		let timestamp2 = response.sunset;
		let dateObject2 = new Date(timestamp2*1000);
		let hours2 = dateObject2.getHours();
		let mins = dateObject2.getMinutes();
		let sunS =`${hours2-12}:${mins} pm`;
		sunSK.innerHTML = sunS;
	})
	.catch(err => console.log(err));
	
	
	
fetch(url + "Kolhapur", options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		
		cloudG.innerHTML = response.cloud_pct;
		tempG.innerHTML = response.temp;
		feelsG.innerHTML = response.feels_like;
		humG.innerHTML = response.humidity;
		minTG.innerHTML = response.min_temp;
		maxTG.innerHTML = response.max_temp;
		windDG.innerHTML = response.wind_speed;
		windSG.innerHTML = response.wind_speed;
		let timestamp = response.sunrise;
		let dateObject = new Date(timestamp * 1000); 
		let hours = dateObject.getHours();
		let minutes = dateObject.getMinutes();
		let sunR=`${hours}:${minutes} am`;
		sunRG.innerHTML = sunR;
		let timestamp2 = response.sunset;
		let dateObject2 = new Date(timestamp2*1000);
		let hours2 = dateObject2.getHours();
		let mins = dateObject2.getMinutes();
		let sunS =`${hours2-12}:${mins} pm`;
		sunSG.innerHTML = sunS;
	})
	.catch(err => console.log(err));
