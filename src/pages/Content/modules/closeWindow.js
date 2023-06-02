
export const createWindow = (url, width, height, left, top) => {
  chrome.windows.getAll({ populate: true }, function (windows) {
    console.log("createWindow getAll", windows)
    // Check if the window already exists
    let existingWindow = null;
    for (let i = 0; i < windows.length; i++) {
      const window = windows[i];
      for (let j = 0; j < window.tabs.length; j++) {
        const tab = window.tabs[j];
        if (tab.url === url) {
          existingWindow = window;
          break;
        }
      }
    }

    if (existingWindow) {
      console.log("createWindow update", url)
      // Update the existing window's URL
      chrome.tabs.update(existingWindow.tabs[0].id, { url: url });

      // Bring the existing window to the foreground
      chrome.windows.update(existingWindow.id, { focused: true });
    } else {
      // Create a new window
      console.log("createWindow create", url)
      chrome.windows.create({
        url: url,
        type: 'popup',
        focused: true,
        width: width,
        height: height,
        left: left,
        top: top
      });
    }
  });
  /** 
  console.log("createWindow query", url)
  chrome.tabs.query({ url: "https://*cal*" }, function (tabs) {
    console.log("createWindow query result", tabs)
    if (tabs.length > 0) {
      console.log('createWindow update:', url);
      //chrome.tabs.update(tabs[0].id, { 'active': true });
    } else {
      console.log('createWindow new:', url);
      chrome.windows.create({
        url: url,
        type: 'popup',
        focused: false,
        width: width,
        height: height,
        left: left,
        top: top
      });
    }
  });
  **/

};