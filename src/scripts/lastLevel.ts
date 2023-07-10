import './lastLevel.css';

export function loadLastLevelNotification() {
  const notification = document.createElement('div');
  notification.className = 'last-level-notice';
  notification.innerHTML = 'You WIN! You are  CSS Expert!';

  document.body.append(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
