import './userInput.css';
import { checkAnswer } from '../scripts/handleAnswer';

export const userCodeBlock = () => {
  const block = document.createElement('div') as HTMLElement;
  block.className = 'user-code-block';
  const blockTitle = document.createElement('div') as HTMLElement;
  blockTitle.className = 'title';
  blockTitle.innerHTML = 'CSS Editor';
  const cssBlock = document.createElement('div') as HTMLElement;
  cssBlock.className = 'css-block';

  const inputBlock = document.createElement('div') as HTMLElement;
  inputBlock.className = 'user-input-block';
  const input = document.createElement('input') as HTMLInputElement;

  input.type = 'text';
  input.className = 'user-input';
  input.placeholder = 'Type in CSS Selector';
  input.onfocus = () => {
    input.value = '';
    input.classList.remove('dimmed');
  };
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const element: HTMLInputElement | null =
        e.target instanceof HTMLInputElement ? e.target : null;
      if (element !== null) {
        checkAnswer(element.value);
      }
    }
  });
  const enter = document.createElement('button') as HTMLElement;
  enter.innerHTML = 'ENTER';
  enter.addEventListener('click', () => {
    checkAnswer(input.value);
  });
  inputBlock.append(enter, input);
  cssBlock.append(blockTitle, inputBlock);

  const htmlBlock = document.createElement('div') as HTMLElement;
  htmlBlock.className = 'html-block';
  const blockTitle1 = document.createElement('div') as HTMLElement;
  blockTitle1.className = 'title';
  blockTitle1.innerHTML = 'HTML Viewer';
  const output = document.createElement('div') as HTMLElement;
  output.className = 'html-output';
  htmlBlock.append(blockTitle1, output);
  block.append(cssBlock, htmlBlock);
  return block;
};
