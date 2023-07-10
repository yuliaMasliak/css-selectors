import { ContentItem, Task } from '../models/models';
import { animate } from './addAnimation';
import './loadLevel.css';
import { customTag } from '../pageComponents/customTag';
import { createHTMLContent } from './htmlContent';
import { addHoverEffects } from './hoverEffects';
import { vars } from '../env/variables';
import { handleLevelsBlock } from '../pageComponents/levels';
import { customTagWithOptions } from '../pageComponents/customTagWithOptions';
import * as data from '../tasks.json';
import { tableConatiner } from '../pageComponents/taskBlock';

export function loadLevel(level: number) {
  const tasksData = [...data];

  localStorage.setItem('level', `${level}`);
  vars.setCurrentlevel(level);
  const htmlOutput = document.querySelector('.html-output') as HTMLElement;
  htmlOutput.innerHTML = '';
  tableConatiner.innerHTML = '';

  const userInput: HTMLInputElement | null =
    document.querySelector('.user-input') instanceof HTMLInputElement
      ? document.querySelector('.user-input')
      : null;

  if (userInput !== null) {
    userInput.value = '';
  }
  const table = document.createElement('div') as HTMLElement;
  table.className = 'table';

  const title = document.createElement('h2') as HTMLElement;

  tasksData.forEach((el: Task) => {
    if (el.level == level) {
      title.innerHTML = `Level ${el.level}. ${el.title}`;
      el.content.forEach((cont: ContentItem, i: number) => {
        let tag;

        if (cont.options) {
          if (cont.options.includes('small')) {
            tag = customTagWithOptions(cont.tag, cont.options);
          } else {
            tag = customTag(cont.tag);
          }
        } else {
          tag = customTag(cont.tag);
        }
        if (cont.anim === 'animation') {
          animate(tag);
        }
        if (cont.options) {
          tag.classList.add(`options=${cont.options}`);
        }
        tag.id = `${i}`;
        if (cont.dish) {
          let dish;
          if (cont.dish.options) {
            dish = customTagWithOptions(cont.dish.tag, cont.dish.options);
            dish.classList.add(`options=${cont.dish.options}`);
            dish;
          } else {
            dish = customTag(cont.dish.tag);
          }

          if (cont.dish.anim === 'animation') {
            animate(dish);
          }

          dish.id = `${i}-dish`;
          tag.append(dish);
        }
        table.append(tag);
        vars.setCurrentAnswer(el.answer);
      });
      const tagDisplay = document.createElement('div') as HTMLElement;
      tagDisplay.classList.add('tag-display');
      tableConatiner.append(title, tagDisplay, table);
      addHoverEffects(table);
    }
  });
  const firstTableDiv = document.createElement('div') as HTMLElement;
  firstTableDiv.textContent = '<div class="table">';
  const lastTableDiv = document.createElement('div') as HTMLElement;
  lastTableDiv.textContent = '<div>';
  const levelsBlock = document.querySelector('.levels-block') as HTMLElement;
  levelsBlock.innerHTML = '';

  htmlOutput.append(firstTableDiv, createHTMLContent(table), lastTableDiv);
  levelsBlock.append(handleLevelsBlock(tasksData));
}
