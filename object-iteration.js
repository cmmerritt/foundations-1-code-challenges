export function makeMoreScreamingKeys(someObject) {
    const newObj = {};
    for (const [key, value] of Object.entries(someObject)) {
        newObj[key.toUpperCase()] = value;
    }   
    return newObj;
}

export function makeWeirdStringFromKeys(someObject) {
    let weirdStr = ''
    for (let key of Object.keys(someObject)) {
        console.log((key));
        weirdStr = weirdStr + key;
    }
    return weirdStr;
}


export function makeTuples(someObject) {
    const tuple = []
    for (const [key, value] of Object.entries(someObject)) {
        tuple.push([key, value])
    };
    return tuple;
}
