const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
//import isDev from "electron-is-dev";
const path = require("path");

let installExtension, REACT_DEVELOPER_TOOLS;

if (isDev) {
  const devTools = require("electron-devtools-installer");
  installExtension = devTools.default;
  REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require("electron-squirrel-startup")) {
  app.quit();
}

function createWindow() {
    console.log('brooo');
    // Create the browser window.
    const win = new BrowserWindow({
        width: 900, minWidth: 900, maxWidth: 900,
		height: 670, minHeight: 670, maxHeight: 670,
        resizable:false,
        webPreferences: {
            preload: path.join(__dirname, '../preload/index.js'),
            nodeIntegration: true,
        },
    });


    const filepath = `file://${path.join(__dirname, "build", "index.html")}`;
    win.loadURL("http://localhost:3000");
    //win.loadURL(isDev ? "http://localhost:3000" : filepath);

    if (isDev) {
        installExtension(REACT_DEVELOPER_TOOLS)
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((error) => console.log(`An error occurred: , ${error}`));

        // Open the DevTools.
        win.webContents.on("did-frame-finish-load", () => {
            win.webContents.openDevTools({ mode: "detach" });
        });
    }
}

// This method will be called when Electron has finished initialization and is ready to create
// browser windows. Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    // IPC test
	ipcMain.on('closeapp', () => { app.quit(); })
	ipcMain.on('ping', () => console.log('pong'));
});

// Quit when all windows are closed, except on macOS. There, it's common for applications and their
// menu bar to stay active until the user quits explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the dock icon is clicked and there
    // are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process code. You can also put
// them in separate files and require them here.