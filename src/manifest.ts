import packageJson from '../package.json';
import { ManifestType } from '@src/manifest-type';

const manifest: ManifestType = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: 'src/options/index.html',
  background: { service_worker: 'src/background/index.js' },
  omnibox: { keyword: 'myomni' },
  action: {
    default_popup: 'src/popup/index.html',
    default_icon: 'icon-34.png',
  },
  // NOTE: you can only choose one page to override per
  // extension (https://developer.chrome.com/docs/extensions/mv3/override)
  chrome_url_overrides: {
    // bookmarks: 'src/overrides/bookmarks/index.html',
    // history: 'src/overrides/history/index.html',
    newtab: 'src/overrides/newtab/index.html',
  },
  icons: {
    '128': 'icon-128.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/content/index.js'],
    },
  ],
  devtools_page: 'src/devtools/index.html',
  side_panel: {
    default_path: 'src/sidepanels/index.html'
  },
  web_accessible_resources: [
    {
      resources: ['icon-128.png', 'icon-34.png'],
      matches: [],
    },
  ],
  permissions: [ 'contextMenus', 'sidePanel' ],
};

export default manifest;
