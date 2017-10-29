const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const BodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://root:password@ds117311.mlab.com:17311/githubres');

require('./Models/User');
require('./services/passport');

app.use(BodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: ['asdajksiakshdinhndskhdfkscnk']
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routs/authRoutes')(app);

// app.get('/', (req, res) => {
// 	app.use(express.static('client/build'));
// 	const path = require('path');
// 	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

app.listen(5000);
