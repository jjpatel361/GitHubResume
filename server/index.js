const express = require('express');
const app = express();

app.get('/', (req, res) => {
	app.use(express.static('client/build'));
	const path = require('path');
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(3000);
