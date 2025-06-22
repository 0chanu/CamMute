const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('controls', {
  disable: () => ipcRenderer.invoke('disable'),
  enable: () => ipcRenderer.invoke('enable'),
});
