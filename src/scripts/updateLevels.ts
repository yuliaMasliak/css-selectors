import { vars } from '../env/variables';
import { Hint } from '../models/models';

export function updateLevels() {
  const level: Hint = {
    level: vars.getCurrentlevel(),
    hint: false
  };

  vars.LevelsWithHints.forEach((el: number) => {
    if (el === vars.getCurrentlevel()) {
      level.hint = true;
    }
  });
  let exists = false;
  vars.winnedLevels.forEach((el: Hint) => {
    if (el.level === vars.getCurrentlevel()) {
      el.hint = level.hint;
      exists = true;
    }
  });

  if (
    (vars.winnedLevels.length > 0 && !exists) ||
    vars.winnedLevels.length === 0
  ) {
    vars.winnedLevels.push(level);
  }

  localStorage.setItem('winnedLevels', JSON.stringify(vars.winnedLevels));
}
