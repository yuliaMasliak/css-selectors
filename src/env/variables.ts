import { Hint } from '../models/models';

export class Variables {
  answer = '';
  level = 1;
  winnedLevels: Hint[] = [];
  LevelsWithHints: number[] = [];
  totalLevelsCount = 10;

  getCurrentAnswer() {
    return this.answer;
  }
  setCurrentAnswer(value: string) {
    this.answer = value;
  }
  getCurrentlevel() {
    return this.level;
  }
  setCurrentlevel(value: number) {
    this.level = value;
  }
  getWinnedLevels() {
    if (localStorage.getItem('winnedLevels') !== null) {
      this.winnedLevels = JSON.parse(localStorage.getItem('winnedLevels')!);
      return this.winnedLevels;
    } else {
      return this.winnedLevels;
    }
  }
}

const vars = new Variables();
export { vars };
