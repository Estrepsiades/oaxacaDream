//import { chrome } from 'chrome-extension-async'
export const getCurrentTab = async() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        // Do something with url
        return url;
    });
};