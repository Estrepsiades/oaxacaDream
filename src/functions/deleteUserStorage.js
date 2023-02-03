import { writeUserStorage } from "./writeUserStorage"

export const deleteUserStorage = () => {
    chrome.storage.local.remove(['key']).then(() => {
        const newSave = []
        console.log('Se removio')
        writeUserStorage( newSave )
        console.log('Se guardo un arreglo vacio')
        console.log('Reinicia la extension')
    })
}