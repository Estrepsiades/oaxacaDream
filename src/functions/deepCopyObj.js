export const deepCopyObj = ( obj ) => {
    if( typeof obj !== 'object' ) return obj;
    if( obj === null ) return null;
    let copyOfObject
    if( Array.isArray( obj ) ){
        copyOfObject = []
        for( let i = 0; i < obj.length; i++ ){
            copyOfObject[i] = deepCopyObj( obj[i] );
        }
    }else{
        copyOfObject = {}
        for( let key in obj){
            copyOfObject[key] = deepCopyObj( obj[key] );
        }
    }
    return copyOfObject;
}