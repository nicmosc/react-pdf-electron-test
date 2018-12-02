const { app, BrowserWindow, Menu } = require('electron');
const dotenv = require('dotenv');
const path = require('path');


dotenv.config();


let _window;


module.exports = function startApp() {
  function createWindow() {

    _window = new BrowserWindow({
      width: 1000,
      height: 500,
      titleBarStyle: 'hiddenInset',
      backgroundColor: '#FFFFFF',
      webPreferences: {
        webSecurity: false,
      },
      show: false,
    });

    if (process.env.APP_ENV === 'development') {
      _window.loadURL(`http://localhost:${process.env.WEBPACK_PORT}`);
      _window.webContents.openDevTools();
    }
    else {
      _window.loadFile('dist/index.html');
    }

    _window.on('closed', () => {
      _window = null;
    });

    _window.on('ready-to-show', () => {
      _window.show();
      _window.focus();
    });
  }


  app.on('ready', createWindow);


  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      _window.quit();
    }
  });


  app.on('activate', () => {
    if (_window === null) {
      createWindow();
    }
  });
}
