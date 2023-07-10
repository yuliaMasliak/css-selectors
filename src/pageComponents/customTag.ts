export function customTag(tag: string) {
  const element = document.createElement(`my-${tag}`) as HTMLElement;

  element.classList.add(`${element.tagName.toLocaleLowerCase()}-on-table`);

  return element;
}
