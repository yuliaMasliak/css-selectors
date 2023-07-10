import { renderApp } from './addPageContent';
import { loadLevel } from './loadLevel';
import { getFromStorage } from './storage';

export function startApp() {
  renderApp();
  loadLevel(getFromStorage());
}
