const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send("Our api server is working");
});

app.listen(port, () => {
	console.log(`Started api on port: ${port}...`);
});
