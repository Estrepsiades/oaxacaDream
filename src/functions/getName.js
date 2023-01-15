export const getName = ( url ) => {
    const nameWithPoints = url.split('.')
    const name = nameWithPoints[1]
    const nameToMayus = name[0].toUpperCase() + name.substring(1);
    return nameToMayus
}