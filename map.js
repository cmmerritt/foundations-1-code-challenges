// Use the map method to solve these problems!

/*
Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    const newArr = arr.map(item => item.name)
    return newArr;
}

export function makeArrayWithIsHungry(arr) {
    const newArr = arr.map(item => ({
        name: item.name,
        isHungry: true,
        type: item.type,
    }));
    return newArr;
}

export function makeShoutingArray(arr) {
    const newArr = arr.map(item => ({
        name: item.name.toUpperCase(),
        type: item.type,
    }));
    return newArr;
}


export function makeStringArray(arr) {
    const newArr = arr.map(item => item.name + item.type);
    return newArr;
}


export function makeArrayOfArraysOfArrays(arr) {
    const newArr = arr.map(item => ([['name', item.name],['type', item.type]]));
    return newArr;
}