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
				stockPriceDisplayer(`<p>${data['ticker']}: $${data['results'][0]['c']}`);
			}
		)
}

function stockPriceDisplayer(input) {
	document.getElementById("stock_price").innerHTML = input;
}

document.getElementById("submit").addEventListener("click", (evt) => {
	evt.preventDefault();
	fetchStock(API_key, document.getElementById("ticker_input").value);
	// document.getElementById("stock_price").innerHTML = `${tickerAndPrice[0]}: ${tickerAndPrice[1]}`;
	})