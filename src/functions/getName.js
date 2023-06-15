export const getName = ( url ) => {
    //Tenemos que hacer que si www es el primer valor se muestre el segundo valor
    const nameWithPoints = url.split('.')
    const name = nameWithPoints[1]
    const nameToMayus = name[0].toUpperCase() + name.substring(1);
    return nameToMayus
}
