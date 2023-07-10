import './taskBlock.css';
import { showHint } from '../scripts/showHint';
import { vars } from '../env/variables';
import { userCodeBlock } from './userInput';
import { footer } from './footer';
import { loadLevel } from '../scripts/loadLevel';

export const tableConatiner = document.createElement('div') as HTMLElement;

export const taskBlock = () => {
  const block = document.createElement('div') as HTMLElement;
  block.className = 'task-block';
  const taskBoard = document.createElement('div') as HTMLElement;
  taskBoard.className = 'task-board';
  const header = document.createElement('div') as HTMLElement;

  tableConatiner.classList.add('table-container');
  header.classList.add('header-title');
  taskBoard.append(tableConatiner, userCodeBlock(), footer());

  const taskDescription = document.createElement('div') as HTMLElement;
  taskDescription.className = 'task-description';
  const helpButton = document.createElement('button') as HTMLElement;
  helpButton.innerHTML = 'Help!';
  helpButton.className = 'base-buttons';
  helpButton.addEventListener('click', () => {
    showHint();
  });
  const sartButton = document.createElement('button') as HTMLElement;
  sartButton.innerHTML = 'From Start';
  sartButton.className = 'base-buttons';
  sartButton.addEventListener('click', () => {
    vars.winnedLevels.length = 0;
    loadLevel(1);
    vars.setCurrentlevel(1);
  });
  const levelsBlock = document.createElement('div') as HTMLElement;
  levelsBlock.className = 'levels-block';
  const title = document.createElement('h3') as HTMLElement;
  title.innerHTML = 'Levels';
  const resetProgressBtn = document.createElement('button') as HTMLElement;
  resetProgressBtn.innerHTML = 'Reset Progress';
  resetProgressBtn.className = 'base-buttons';
  resetProgressBtn.addEventListener('click', () => {
    vars.winnedLevels.length = 0;
    loadLevel(Number(localStorage.getItem('level')));
    localStorage.removeItem('winnedLevels');
  });
  taskDescription.append(
    helpButton,
    sartButton,
    resetProgressBtn,
    title,
    levelsBlock
  );

  block.append(taskBoard, taskDescription);
  return block;
};
