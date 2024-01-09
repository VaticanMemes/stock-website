// API key: wgOwUik_ijPDrNSCYdgpwnNMy59pFJ99

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