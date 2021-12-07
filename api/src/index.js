const express = require('express');
const {port} = require('./config');
const app = express();

app.get('/', (req, res) => {
	res.send("Our api server is working");
});

app.listen(port, () => {
	console.log(`Started api on port: ${port}...`);
});