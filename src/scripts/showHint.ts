import { vars } from '../env/variables';

export function showHint() {
  vars.LevelsWithHints.push(vars.getCurrentlevel());
  const outputHint = document.querySelector('.user-input') as HTMLInputElement;

  outputHint.value = '';

  let i = 0;

  const answer = vars.getCurrentAnswer();
  console.log(answer);
  outputHint.classList.add('dimmed');
  const int = setInterval(() => {
    if (i === answer.length - 1) {
      console.log(i);

      clearInterval(int);
    }

    outputHint.value += answer[i] + ' ';
    i++;
  }, 200);
}
