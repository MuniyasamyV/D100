self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
    
  .then(data => data.JSON())
  .then((serverOutput)=>console.log('server has send ${serverOutput}'))
    console.log(content);
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    fetch('/postData', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event:'activate',
            someData:'this is a msg with some data'
        })
    });
  });