chrome.alarms.onAlarm.addListener(() => {
    chrome.action.setBadgeText({ text: '' });
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'hiicon.png',
      title: 'Time is up',
      message: "It's finished",
      buttons: [{ title: 'Finish' }],
      priority: 0
    });
  });
  
  chrome.notifications.onButtonClicked.addListener(async () => {
    const item = await chrome.storage.sync.get(['minutes']);
    chrome.action.setBadgeText({ text: 'ON' });
    chrome.alarms.create({ delayInMinutes: item.minutes });
  });