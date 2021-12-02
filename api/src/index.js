const express = require('express');
const {connectDb} = require('./helpers/db');
const {port} = require('./config');
const app = express();

const db = connectDb();
console.log(db);

app.get('/', (req, res) => {
	res.send("Our api server is working");
});

app.listen(port, () => {
	console.log(`Started api on port: ${port}...`);
});