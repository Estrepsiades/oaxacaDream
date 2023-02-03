export const getUserStorage = async() => {
    const { key } = await chrome.storage.local.get({ key: 'bookMark' });
    console.log('De getUser')
    console.log( key )
    return key;
    }
