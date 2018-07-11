// This file isn't transpiled, CommonJS and ES5 must be used

// Register babel to transpil befor our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
