export const getCurrentTab = async() => {
    return new Promise(resolve => {
        chrome.tabs.query({ active: true}, tabs => {
        let url = tabs[0].url;
        resolve(url);
        });
    });
};