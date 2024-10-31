let intervalId;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'start') {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        tabs.forEach((tab) => {
          chrome.tabs.reload(tab.id);
        });
      });
    }, request.interval * 1000);
  } else if (request.action === 'stop') {
    clearInterval(intervalId);
  }
});