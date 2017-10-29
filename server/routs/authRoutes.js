const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth',
		passport.authenticate('github', { scope: ['user', 'gist', 'repo'] })
	);

	app.get(
		'/auth/callback',
		passport.authenticate('github', { failureRedirect: '/' }),
		function(req, res) {
			res.redirect('/home');
		}
	);
	app.get('/api/me', (req, res) => {
		res.send(req.user);
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};
