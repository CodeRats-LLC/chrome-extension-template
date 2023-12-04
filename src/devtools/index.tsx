import DevTools from '@src/devtools/DevTools';
import { initElement } from '@src/main';

const bootstrap = () => {
  try {
    chrome.devtools.panels.create(
      'MyDevToolsPanel',
      'src/devtools/icon-34.png',
      'src/devtools/index.html'
    );
  } catch (e) {
    console.error(e);
  }
  initElement(<DevTools />);
};

bootstrap();
