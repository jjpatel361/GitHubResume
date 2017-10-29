const passport = require('passport');
const githubStrategy = require('passport-github2').Strategy;
const user = require('mongoose').model('users');
module.exports = app => {
	app.get(
		'/auth',
		passport.authenticate('github', { scope: ['user', 'gist', 'repo'] })
	);

	app.get(
		'/auth/callback',
		passport.authenticate('github', { failureRedirect: '/login' }),
		function(req, res) {
			res.redirect('/');
		}
	);
	app.get('/api/me', (req, res) => {
		res.send(req.user);
	});
};
