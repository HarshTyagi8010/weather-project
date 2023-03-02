const encodedParams = new URLSearchParams();
encodedParams.append("apiKey", "<REQUIRED>");
encodedParams.append("locationKey", "<REQUIRED>");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '2e7f361fa1mshb2a8123c1ce6642p171e8djsn4d4fe93ab88f',
		'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));