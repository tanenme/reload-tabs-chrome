document.getElementById('start').addEventListener('click', () => {
  const intervalValue = document.getElementById('interval').value;
  chrome.runtime.sendMessage({ action: 'start', interval: intervalValue });
});

document.getElementById('stop').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'stop' });
}); 
