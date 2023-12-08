console.log('service worker loaded');

/**
 */
function contextMenuClick(info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab | undefined) {
  switch (info.menuItemId) {
    case 'appOpenSidebar':
      if (!tab) return;
      chrome.sidePanel.open({ windowId: tab.windowId });
      break;
    default:
      break;
  }
}

/**
 */
const installContextMenu = () => {
  console.log('installing context menu');

  chrome.contextMenus.create({
    id: 'appContextMenu',
    title: 'MyContextMenu',
    contexts: ["page"],
  });

  chrome.contextMenus.create({
    id: 'appOpenSidebar',
    parentId: 'appContextMenu',
    title: 'Open Sidebar',
    contexts: ["page"],
  });
};

/**
 */
chrome.runtime.onInstalled.addListener((details) => {
  console.log('runtime.onInstalled');

  switch (details.reason) {
    case 'install':
      installContextMenu();
      break;
    case 'update':
      break;
    case 'chrome_update':
      break;
    case 'shared_module_update':
      break;
    default:
      break;
  }

});

chrome.contextMenus.onClicked.addListener(contextMenuClick);
