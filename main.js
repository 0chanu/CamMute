const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { disableAll, enableAll } = require('./index');

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 200,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.handle('disable', () => {
  disableAll();
});

ipcMain.handle('enable', () => {
  enableAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
