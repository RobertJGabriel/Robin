// Load native UI library
var gui = require('nw.gui');

// Create menu
var menu = new gui.Menu({
    type: 'menubar'
});

// Create sub-menu
var menuItems = new gui.Menu();

//menuItems.append(new gui.MenuItem({ label: 'Custom Menu Item 1' }));
//menuItems.append(new gui.MenuItem({ label: 'Custom Menu Item 2' }));

// create MacBuiltin
menu.createMacBuiltin('Robin', {
    hideEdit: false,
    hideWindow: true
});


// Append Menu to Window
gui.Window.get().menu = menu;
