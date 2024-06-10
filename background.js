// chrome.browserAction.onClicked.addListener(function(tab) {
//     console.log('Browser action icon clicked.');
//     // Your logic here
// });
  
defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.adzerk.net/*",
    "*://*.kevel.co/*",
    "*://*.kevel.com/*",
    "*://*.evadav.com/*",
    "*://*.evadav.net/*",
    "*://*.hitapps.com/*",
    "*://*.astrad.io/*",
    "*://*.openx.net/*",
    "*://*.servedbyopenx.com/*",
    "*://*.broadstreetads.com/*",
    "*://*.rubiconproject.com/*",
    "*://*.magnite.com/*",
    "*://*.adbutler.com/*",
    "*://*.smartadserver.com/*",
    "*://*.equativ.com/*",
    "*://*.epom.com/*",
    "*://*.epommarket.com/*"
]
chrome.webRequest.onBeforeRequest.addListener(
function(details) { return { cancel: true }; },
    {urls: defaultFilters},
    ["blocking"]
);

