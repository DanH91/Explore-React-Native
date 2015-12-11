import _ from 'lodash';

let key = 'yourkey';
let rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + key;

export default function(latitude, longitude){
    var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

    return fetch(url)
	.then(function(response){
	    return response.json();
	})
	.then(function(data){
	    return {
		city: data.name,
		temperature: kelvinToF(data.main.temp),
		description: _.capitalize(data.weather[0].description)
	    };
	});
}

function kelvinToF(kelvin){
    return Math.round((kelvin - 273.15) * 1.8 + 32) + ' F';
}
