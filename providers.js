'use strict';

var _GLOBAL = require('./lib/global');
var utils = require('./node_modules/loopback-component-passport/lib/models/utils');

function profile(provider, profile, options) {
  var profileEmail = profile.emails && profile.emails[0] &&
    profile.emails[0].value;
  var email, username, emailVerified;
  if (profileEmail) {
    email = profileEmail;
    emailVerified = true;
    username = email.split('@')[0];
  } else {
    username = profile.name.givenName.split(' ')[0];
    email = (username || profile.id) + '@criptoanalisis.' +
      (profile.provider || provider) + '.com';
  }
  var password = utils.generateKey('password');
  var firstname = profile.name.givenName;
  var lastname = profile.name.familyName;
  var photos = profile.photos && profile.photos[0] &&
    profile.photos[0].value;
  var userObj = {
    username: username,
    password: password,
    firstName: firstname,
    lastName: lastname,
    perfilLink: photos,
  };
  if (email) {
    userObj.email = email;
    userObj.emailVerified = emailVerified;
  }
  return userObj;
};

var provider = {
  'facebook-login': {
    provider: 'facebook',
    module: 'passport-facebook',
    profileFields: [
      'name',
      'email',
      'picture',
    ],
    clientID: _GLOBAL.credentials.facebook.identity,
    clientSecret: _GLOBAL.credentials.facebook.keySecret,
    callbackURL: _GLOBAL.backend + '/auth/facebook/callback',
    authPath: '/auth/facebook',
    callbackPath: '/auth/facebook/callback',
    successRedirect: '/auth/success',
    failureRedirect: '/auth/facebook/failure',
    scope: [
      'email',
      'public_profile',
    ],
    profileToUser: profile,
  },
  'google-login': {
    provider: 'google',
    module: 'passport-google-oauth2',
    strategy: 'OAuth2Strategy',
    clientID: _GLOBAL.credentials.google.identity,
    clientSecret: _GLOBAL.credentials.google.keySecret,
    callbackURL: _GLOBAL.backend + '/auth/google/callback',
    authPath: '/auth/google',
    callbackPath: '/auth/google/callback',
    successRedirect: '/auth/success',
    failureRedirect: '/auth/google/failure',
    scope: [
      'email',
      'profile',
    ],
    failureFlash: true,
    profileToUser: profile,
  },
};

exports.provider = provider;
