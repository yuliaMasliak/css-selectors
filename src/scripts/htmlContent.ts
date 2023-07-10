import { addHoverEffects } from './hoverEffects';
import {
  addClosingTag,
  addOptions,
  createChildren,
  createElement
} from './handleHTMLContent';

export function createHTMLContent(table: HTMLElement) {
  const fragment = document.createElement('div');
  fragment.className = 'fragment';
  const arr = [...Array.from(table.children)];

  function createTag(tag: Element) {
    const tagElem = createElement(tag);

    //if tag has id/class
    if (tag.className.includes('options')) {
      addOptions(tag, tagElem);
    }
    tagElem.textContent = `  ${tagElem.outerHTML}`;

    //if tag has children
    if (tag.children.length) {
      const closingTag = addClosingTag(tag, tagElem);
      const tagChild = createChildren(tag, tagElem);

      tagElem.appendChild(tagChild);
      tagElem.id = tag.id + '-clone';
      tagElem.style.cursor = 'pointer';
      fragment.append(tagElem, closingTag);
    } else {
      tagElem.id = tag.id + '-clone';
      tagElem.style.cursor = 'pointer';
      fragment.append(tagElem);
    }
  }
  arr.forEach((tag) => {
    createTag(tag);
  });

  addHoverEffects(fragment);

  return fragment;
}
