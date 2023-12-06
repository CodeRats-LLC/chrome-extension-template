import { JSX, render } from 'preact';

import './styles/main.css';

import 'uno.css';
import 'virtual:uno.css';
import 'virtual:unocss-devtools';

export const initElement = (elem: JSX.Element) => {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find AppContainer');
  }
  render(elem, appContainer);
};
