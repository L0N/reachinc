const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.login(user, (err) => {
      if (err) {
        return next(err);
      }

      return res.json(user);
    });
  })(req, res, next);
});
