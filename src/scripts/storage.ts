export function getFromStorage() {
  if (localStorage.getItem('level')) {
    return Number(localStorage.getItem('level'));
  } else {
    return 1;
  }
}
