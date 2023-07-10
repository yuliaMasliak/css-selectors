import { Hint, Task } from '../models/models';
import './levels.css';
import { vars } from '../env/variables';
import { loadLevel } from '../scripts/loadLevel';

export function handleLevelsBlock(levelsItems: Task[]) {
  const block = document.createElement('div') as HTMLElement;
  block.className = 'levels';

  levelsItems.forEach((level, i) => {
    const levelsBlock = document.createElement('div') as HTMLElement;
    levelsBlock.classList.add('level-item');
    const divCheckBox = document.createElement('span') as HTMLElement;
    divCheckBox.className = 'container';
    const levelCheck = document.createElement('input') as HTMLInputElement;
    levelCheck.type = 'checkbox';
    const spanCheckBox = document.createElement('span') as HTMLElement;
    spanCheckBox.className = 'checkmark';

    divCheckBox.append(levelCheck, spanCheckBox);

    const levelCount = document.createElement('button') as HTMLElement;
    levelCount.innerHTML = `${level.level}`;
    levelCount.className = 'level-number';
    levelCount.addEventListener('click', () => {
      loadLevel(level.level);
    });

    if (Number(levelCount.innerHTML) == vars.getCurrentlevel()) {
      levelCount.classList.add('currrent-level');
    }

    const useHint = document.createElement('span') as HTMLElement;
    useHint.className = 'withot-hint';
    useHint.innerHTML = 'with Hint';
    const storage = localStorage.getItem('winnedLevels');
    if (storage) {
      if (storage.length > 0) {
        const winnerFromStorage = JSON.parse(storage);

        winnerFromStorage.forEach((elem: Hint) => {
          if (Object.values(elem)[0] === i + 1) {
            levelCheck.checked = true;
            if (Object.values(elem)[1] === true) {
              useHint.className = 'with-hint';
            }
          }
        });
      }
    }

    levelsBlock.append(divCheckBox, levelCount, useHint);
    block.append(levelsBlock);
  });
  return block;
}
