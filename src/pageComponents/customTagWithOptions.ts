export function customTagWithOptions(tag: string, options: string) {
  const part = options.slice(options.indexOf('=') + 1);
  const element = document.createElement(`${part}-${tag}`) as HTMLElement;

  element.classList.add(`${element.tagName.toLocaleLowerCase()}-on-table`);

  return element;
}
