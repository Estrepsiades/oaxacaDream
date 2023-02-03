import { deepCopyObj } from './deepCopyObj'
import { writeUserStorage } from './writeUserStorage';
export const writeItemsSave = ( bookMark, i, item ) => {
    const newArray = deepCopyObj( bookMark )
    newArray[i].items.push( item )
    writeUserStorage( newArray )
};