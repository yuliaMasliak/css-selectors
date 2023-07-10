import { vars } from '../env/variables';
import { loadLevel } from './loadLevel';

export function animate(element: HTMLElement | string) {
  if (element instanceof HTMLElement) {
    element.animate(
      [
        { transform: 'translate(0, 0)' },

        { transform: 'translate(-5px, -5px)' },

        { transform: 'translate(0, 0)' },

        { transform: 'translate(5px, -10px)' },
        { transform: 'translate(0, 0)' }
      ],
      {
        duration: 1000,
        iterations: Infinity
      }
    );
  } else {
    if (element === 'loss') {
      const spinning = [
        { transform: 'scale(1)' },
        { transform: 'scale(0.97)' },
        { transform: 'scale(1)' }
      ];

      const timing = {
        duration: 100,
        iterations: 3
      };
      const app = document.querySelector('.app') as HTMLElement;
      app.animate(spinning, timing);
    } else if (element === 'win') {
      const spinning = [{ transform: 'scale(1)' }, { transform: 'scale(0)' }];

      const timing = {
        duration: 1000,
        iterations: 1
      };
      const table = document.querySelector('.table') as HTMLElement;
      table.animate(spinning, timing);
      setTimeout(() => {
        vars.setCurrentlevel(vars.getCurrentlevel() + 1);
        loadLevel(vars.getCurrentlevel());
      }, 950);
    }
  }
}
