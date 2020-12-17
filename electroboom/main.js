// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev');   

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height:650,width:450,
    maxHeight:650,maxWidth:450,
    minHeight:650,minWidth:450,

    frame:false,
    webPreferences: {
      nodeIntegration:true,
      enableRemoteModule: true

    }
  })

  // and load the index.html of the app.
  const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startURL);
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})