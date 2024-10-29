let intervalId;

document.getElementById('startButton').addEventListener('click', () => {
  const button = document.getElementById('startButton');

  if (button.textContent === 'Mulai') {
    button.textContent = 'Stop';
    intervalId = setInterval(() => {
      chrome.tabs.query({currentWindow: true}, function(tabs) {
        tabs.forEach(function(tab) {
          chrome.tabs.reload(tab.id);
        });
      });
    }, 20000); // Reload setiap 20 detik
  } else {
    button.textContent = 'Mulai';
    clearInterval(intervalId);
  }
});