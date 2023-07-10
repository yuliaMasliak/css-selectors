import { vars } from '../env/variables';
import { animate } from './addAnimation';
import { loadLastLevelNotification } from './lastLevel';
import { updateLevels } from './updateLevels';

export function checkAnswer(value: string) {
  if (vars.getCurrentAnswer() === value) {
    animate('win');
    updateLevels();

    if (vars.winnedLevels.length === vars.totalLevelsCount) {
      loadLastLevelNotification();
    }
  } else {
    animate('loss');
  }
}
