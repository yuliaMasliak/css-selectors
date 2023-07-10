import './app.css';
import { header } from './header';
import { taskBlock } from './taskBlock';

export const app = () => {
  const app = document.createElement('div') as HTMLElement;
  app.className = 'app';
  app.append(header(), taskBlock());

  return app;
};
