import { app, BrowserWindow } from "electron";

import("electron-squirrel-startup").then((value) => {
  if (value === true) app.quit();
});

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    minWidth: 256,
    width: 256,
    maxWidth: 256,

    minHeight: 256,
    height: 256,
    maxHeight: 256,

    minimizable: false,
    webPreferences: {
      preload: `${import.meta.dir}/preload.mjs`,
      webviewTag: true,
      devTools: false,
    },
    alwaysOnTop: true,
    autoHideMenuBar: true,
    frame: false,
  });
  // mainWindow.loadFile("index.html");
  mainWindow.loadURL("http://localhost/");
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
