import './header.css';
import './assets/dish-logo.png';

export const header = () => {
  const header = document.createElement('header') as HTMLElement;
  const title = document.createElement('span') as HTMLElement;
  title.innerHTML = 'CSS Diner';
  const img = document.createElement('img') as HTMLImageElement;
  img.src = './assets/dish-logo.png';
  header.append(img, title);
  return header;
};
