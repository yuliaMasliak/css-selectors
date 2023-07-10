import { createElement } from './handleHTMLContent';
import './showTagOnhover.css';

function createElementContent(element: HTMLElement) {
  const tagElem = createElement(element);
  console.log(tagElem);

  if (element.textContent) {
    if (element.textContent[3] == '/') {
      tagElem.textContent =
        '<' +
        element.textContent.slice(4, element.textContent.indexOf('>') + 1);
    } else {
      tagElem.textContent = element.textContent.slice(
        0,
        element.textContent.indexOf('>') + 1
      );
    }
  } else {
    tagElem.textContent = element.tagName.slice(
      0,
      element.tagName.indexOf('>') + 1
    );
  }

  return tagElem;
}

export function showTagOnHover(element: HTMLElement) {
  const tagDisplay = document.querySelector('.tag-display') as HTMLElement;
  tagDisplay.classList.add('tag-display-show');
  if (element.className !== 'table') {
    console.log(element);
    let tagElem;
    if (element.textContent) {
      if (element.textContent.length > 0) {
        tagElem = createElementContent(element);
      }
    } else {
      const copy = document.getElementById(
        element.id + '-clone'
      ) as HTMLElement;

      tagElem = createElementContent(copy);
    }

    if (tagElem instanceof HTMLElement) {
      tagDisplay.append(tagElem);
    }
  }
}

export function hideTagOnHover() {
  const tagDisplay = document.querySelector('.tag-display') as HTMLElement;
  tagDisplay.innerHTML = '';
  tagDisplay.classList.remove('tag-display-show');
}
