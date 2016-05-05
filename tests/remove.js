require('events').EventEmitter.prototype._maxListeners = 100;
var Firebase = require('firebase');

var ref = new Firebase('https://projectbird-robin.firebaseio.com');
var authData = ref.getAuth();

ref.remove();
