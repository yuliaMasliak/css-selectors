export function addClosingTag(tag: Element, parentTag: HTMLElement) {
  const closingTag = document.createElement(parentTag.tagName);
  if (parentTag.textContent) {
    if (
      parentTag.textContent.includes('class') ||
      parentTag.textContent.includes('id')
    ) {
      const content = parentTag.textContent.split(' ');
      closingTag.textContent = `  ${content[2] + '>'}`;
    } else {
      closingTag.textContent = `  ${parentTag.textContent.slice(
        parentTag.textContent.length / 2 + 1
      )}`;
    }
    closingTag.id = tag.id + '-closing';
    closingTag.style.cursor = 'pointer';
  }
  return closingTag;
}

export function addOptions(baseTag: Element, newElem: HTMLElement) {
  const arr = baseTag.className.split('options=');
  const attributes = arr[1].split('=');
  newElem.setAttribute(attributes[0], attributes[1]);
}

export function createElement(tag: Element) {
  let element;
  if (tag.tagName.toLowerCase().includes('small')) {
    element = document.createElement(
      `${tag.tagName.toLowerCase().replace('small-', '')}`
    );
  } else {
    element = document.createElement(
      `${tag.tagName.toLowerCase().replace('my-', '')}`
    );
  }
  return element;
}

export function createChildren(tag: Element, tagElem: HTMLElement) {
  const child = tag.children[0];
  const tagChild = createElement(child);

  if (child.className.includes('options')) {
    addOptions(child, tagChild);
  }
  if (tagElem.textContent) {
    const cont1 = tagElem.textContent.slice(
      0,
      tagElem.textContent.indexOf('>') + 1
    );
    tagElem.textContent = `${cont1}`;
  }

  tagChild.textContent = `    ${tagChild.outerHTML}`;
  tagChild.id = child.id + '-clone';
  tagChild.style.cursor = 'pointer';
  return tagChild;
}
