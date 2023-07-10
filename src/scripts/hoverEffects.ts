import { showTagOnHover, hideTagOnHover } from './showTagOnhover';

export function addHoverEffects(table: HTMLElement) {
  table.addEventListener('mouseover', (e) => {
    const element: HTMLElement | null =
      e.target instanceof HTMLElement ? e.target : null;
    if (
      element !== null &&
      element.className !== 'table' &&
      element.className !== 'fragment'
    ) {
      showTagOnHover(element);
      if (element.id.includes('clone')) {
        element.classList.add('hovered-text');
        const tableElement = document.getElementById(
          element.id.replace('-clone', '')
        ) as HTMLElement;
        tableElement.classList.add('hovered-on-table');
        try {
          const closingTag = document.getElementById(
            element.id.replace('-clone', '-closing')
          ) as HTMLElement;
          closingTag.classList.add('hovered-text');
        } catch (err) {
          console.log('Element without closing tag');
        }
      } else if (element.id.includes('closing')) {
        element.classList.add('hovered-text');
        const tableElement = document.getElementById(
          element.id.replace('-closing', '')
        ) as HTMLElement;
        tableElement.classList.add('hovered-on-table');
        const htmlBlockTag = document.getElementById(
          element.id.replace('-closing', '-clone')
        ) as HTMLElement;
        htmlBlockTag.classList.add('hovered-text');
      } else {
        element.classList.add('hovered-on-table');
        const htmlBlockTag = document.getElementById(
          `${element.id}-clone`
        ) as HTMLElement;
        htmlBlockTag.classList.add('hovered-text');
        try {
          const closingTag = document.getElementById(
            `${element.id}-closing`
          ) as HTMLElement;
          closingTag.classList.add('hovered-text');
        } catch (err) {
          console.log('Element without closing tag');
        }
      }
    }
  });

  table.addEventListener('mouseout', (e) => {
    const element: HTMLElement | null = e.target as HTMLElement;
    if (
      element instanceof HTMLElement &&
      element.className !== 'table' &&
      element.className !== 'fragment'
    ) {
      hideTagOnHover();
      if (element.id.includes('clone')) {
        element.classList.remove('hovered-text');
        const htmlBlockTag = document.getElementById(
          element.id.replace('-clone', '')
        ) as HTMLElement;
        htmlBlockTag.classList.remove('hovered-on-table');
        try {
          const closingTag = document.getElementById(
            element.id.replace('-clone', '-closing')
          ) as HTMLElement;
          closingTag.classList.remove('hovered-text');
        } catch (err) {
          console.log('Element without closing tag');
        }
      } else if (element.id.includes('closing')) {
        element.classList.remove('hovered-text');
        const htmlBlockTag = document.getElementById(
          element.id.replace('-closing', '-clone')
        ) as HTMLElement;
        htmlBlockTag.classList.remove('hovered-text');
        const tableTag = document.getElementById(
          element.id.replace('-closing', '')
        ) as HTMLElement;
        tableTag.classList.remove('hovered-on-table');
      } else {
        element.classList.remove('hovered-on-table');
        const htmlBlockTag = document.getElementById(
          `${element.id}-clone`
        ) as HTMLElement;
        htmlBlockTag.classList.remove('hovered-text');
        try {
          const closingTag = document.getElementById(
            `${element.id}-closing`
          ) as HTMLElement;
          closingTag.classList.remove('hovered-text');
        } catch (err) {
          console.log('Element without closing tag');
        }
      }
    }
  });
}
