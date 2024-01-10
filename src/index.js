import _ from 'lodash';

const API_key = "wgOwUik_ijPDrNSCYdgpwnNMy59pFJ99"
const stock = prompt("Enter a stock ticker")
const tickerAndPrice = []

function fetchStock(apiKey, stockticker) {
	let API_call = `https://api.polygon.io/v2/aggs/ticker/${stockticker}/prev?adjusted=true&apiKey=${apiKey}`
	fetch(API_call)
		.then(
			function(response) {
				return response.json();
			}
		)
		.then(
			function(data) {
				tickerAndPrice.splice(0,tickerAndPrice.length);
				tickerAndPrice.push(data['ticker'], data['results'][0]['c']);
				// return [data['ticker'], data['results'][0]['c']];
			}
		)
	/*
	console.log(tickerAndPrice)
	if (tickerAndPrice != null) {
		return tickerAndPrice;
	} else {
		return null;
	}
	*/
}

fetchStock(API_key, stock);
console.log(tickerAndPrice)

/*
{
    "ticker": "AAPL",
    "queryCount": 1,
    "resultsCount": 1,
    "adjusted": true,
    "results": [
        {
            "T": "AAPL",
            "v": 42841809,
            "vw": 184.3706,
            "o": 183.92,
            "c": 185.14,
            "h": 185.15,
            "l": 182.73,
            "t": 1704834000000,
            "n": 538180
        }
    ],
    "status": "OK",
    "request_id": "d5fe10da961f70dd527573690e7aad02",
    "count": 1
}
*/

/*
import puppeteer from "puppeteer";

const getQuotes = async () => {
	// Start a Puppeteer session with:
	// - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
	// - no default viewport (`defaultViewport: null` - website page will in full width and height)
	const browser = await puppeteer.launch({
	  headless: false,
	  defaultViewport: null,
	});
  
	// Open a new page
	const page = await browser.newPage();
  
	// On this new page:
	// - open the "http://quotes.toscrape.com/" website
	// - wait until the dom content is loaded (HTML is ready)
	await page.goto("https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=wgOwUik_ijPDrNSCYdgpwnNMy59pFJ99", {
	  waitUntil: "domcontentloaded",
	});
  };
  
  // Start the scraping
  getQuotes();

const { restClient } = require("@polygon.io/client-js")
const rest = restClient(process.env.wgOwUik_ijPDrNSCYdgpwnNMy59pFJ99);

rest.stocks.lastTrade("AAPL").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});

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

*/