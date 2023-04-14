passport.use('user', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  // find user in database and check password
  // call done with user object if authenticated or false if not
}));

passport.use('admin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  // find admin in database and check password
  // call done with admin object if authenticated or false if not
}));
