function getRandomNumber() {
  return Math.floor(Math.random() * (220 - 190 + 1)) + 190;
}

document.getElementById('start').addEventListener('click', () => {
  const intervalValue = getRandomNumber()
  chrome.runtime.sendMessage({ action: 'start', interval: intervalValue });
});

document.getElementById('stop').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'stop' });
});
