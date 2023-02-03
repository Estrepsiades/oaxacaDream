export const writeUserStorage = ( bookMark ) => {
    chrome.storage.local.set({ key: bookMark }).then( () => {
        console.log( 'Esto Guarda ')
        console.log( bookMark )
        console.log('Guardando...')
    })
}