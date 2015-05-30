define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
    var ripples = require('../jquery-1.10.2.min');
    var bootstrap = require('../bootstrap.min');
    
    var frame = require('../frames');
     var magteroal = require('../material');
    
    
    
     var zload = require('../zload');
    
    
    
    
    
    
    
    
    
    

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');
    $.material.init();
    print(messages.getHello());
});
