// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/


export function makeArrayOfNames(arr) {
    let newArr = [];
    arr.forEach((item) => {
        newArr.push(item.name);
    })
    return newArr;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let newArr = [];
    arr.forEach((item) => {
        newArr.unshift(item.type);
    })
    return newArr;
}

/*
Output:

[

    { nombre: 'coco', tipo: 'cat' },
    { nombre: 'jumper', tipo: 'frog' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let newArr = []
    arr.forEach((item) => {
        newArr.push({nombre: item.name, tipo: item.type});
    })
    return newArr;
}

