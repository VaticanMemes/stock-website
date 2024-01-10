import _ from 'lodash';

const API_key = "wgOwUik_ijPDrNSCYdgpwnNMy59pFJ99"
const tickerAndPrice = []

async function fetchStock(apiKey, stockticker) {
	let API_call = `https://api.polygon.io/v2/aggs/ticker/${stockticker}/prev?adjusted=true&apiKey=${apiKey}`
	fetch(API_call)
		.then(
			function(response) {
				return response.json();
			}
		)
		.then(
			function(data) {
				try {
				stockPriceDisplayer(`<p>${data['ticker']}: $${data['results'][0]['c']}`);
				}
				catch(err) {
					errorFunction();
				}
			}
		)
}

function errorFunction() {
	document.getElementById("ticker_input").classList.add("is-invalid")
}

function stockPriceDisplayer(input) {
	document.getElementById("ticker_input").classList.remove("is-invalid")
	document.getElementById("stock_price").innerHTML = input;
}

document.getElementById("submit").addEventListener("click", (evt) => {
	evt.preventDefault();
	fetchStock(API_key, document.getElementById("ticker_input").value);
	})