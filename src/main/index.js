const { app, BrowserWindow } = require('electron')
const config= require("./config.js")
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
          nodeIntegration: true,
          contextIsolation: false

      }
    })
    win.loadURL(config.actionUrl)
    //win.webContents.openDevTools()
  }

  app.whenReady().then(() => {
    createWindow()
  })
  
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })
  