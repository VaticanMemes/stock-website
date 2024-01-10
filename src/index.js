// API key: wgOwUik_ijPDrNSCYdgpwnNMy59pFJ99

import _ from 'lodash';

/*
const { restClient } = require("@polygon.io/client-js")
const rest = restClient(process.env.wgOwUik_ijPDrNSCYdgpwnNMy59pFJ99);

rest.stocks.lastTrade("AAPL").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
*/


document.getElementById("submit").addEventListener("click", (evt) => {
	evt.preventDefault();
	const data_to_pass_in = document.getElementById("ticker_input").value;
	const spawner = require('child_process').spawn;
	console.log("Data sent to python script:", data_to_pass_in);
	const python_process = spawner('python', ['./polygon_api.py', data_to_pass_in]);
	python_process.stdout.on('data', (data) => {
		console.log("Data recieved from python script:", data.toString());
	})
})