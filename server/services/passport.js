const passport = require('passport');
const githubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new githubStrategy(
		{
			clientID: 'd1cdc709d57dcfcc82a9',
			clientSecret: '7ba82ad9d2400f2a618b4d43460921e4fce5e4fd',
			callbackURL: '/auth/callback'
		},
		async (accessToken, refreshToken, profile, done) => {
			console.log(profile._json);
			const existingUser = await User.findOne({
				providerId: profile.id
			});
			if (existingUser) {
				return done(null, existingUser);
			}
			const user = await new User({
				avatar: profile._json.avatar_url,
				providerId: profile._json.id,
				username: profile._json.login,
				blog: profile._json.blog,
				email: profile._json.email,
				location: profile._json.location,
				bio: profile._json.bio
			}).save();
			done(null, user);
		}
	)
);
