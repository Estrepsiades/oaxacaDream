import { deepCopyObj } from "./deepCopyObj"
import { writeUserStorage } from "./writeUserStorage"
export const deleteItemsSave = ( bookMark, i, id ) => {
    const newArray = deepCopyObj( bookMark )
    const itemsOfArray = newArray[i].items.slice()
    const updateItems = itemsOfArray.filter( e => e.id !== id )
    newArray[i].items = updateItems
    writeUserStorage( newArray )
}