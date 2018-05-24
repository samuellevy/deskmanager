const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
    // Create new window
    mainWindow = new BrowserWindow({});

    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes:'true'
    }));

    // Build Menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
    {
        label: 'Electron',
        submenu: [
            {
                label: 'Teste'
            },
            {
                label: 'Quit',
                click(){
                    app.quit();
                }
            },
        ]
    },
    {
        label: 'File',
        submenu: [
            {
                label: 'Add item'
            },
            {
                label: 'Clear items'
            },
            {
                label: 'Quit',
                click(){
                    app.quit();
                }
            },
        ]
    }
];