console.log('service worker loaded');

// A generic onclick callback function.
function genericOnClick(info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab | undefined) {
  switch (info.menuItemId) {
    case 'sampleContextMenu':
      // toggle the sidebar
      if (!tab) return;
      chrome.sidePanel.open({ windowId: tab.windowId });
      break;
    default:
      break;
  }
}

chrome.runtime.onInstalled.addListener((details) => {
  console.log('runtime.onInstalled');
  if (details.reason !== "install" && details.reason !== "update") return;
  console.log('installing context menu');
  chrome.contextMenus.create({
    id: 'sampleContextMenu',
    title: 'Sample Context Menu',
    contexts: ["page"],
  });
});

chrome.contextMenus.onClicked.addListener(genericOnClick);
