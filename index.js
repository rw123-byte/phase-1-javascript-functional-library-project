const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

const myEach = function(collection, callback) {
    const newCollection = standardizeInput(collection);

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
    }

    return collection;
}

const myMap = function(collection, callback) {
    const newCollection = standardizeInput(collection);

    const thisArray = [];

    for (let i = 0; i < newCollection.length; i++) {
        thisArray.push(callback(newCollection[i]));
    }

    return thisArray;
}

const myReduce = function(collection, callback, acc) {
    let newCollection = standardizeInput(collection);

    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    const len = newCollection.length;

    for (let i = 0; i < len; i++) {
        acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
}

const myFind = function(collection, predicate) {
    const newCollection = standardizeInput(collection);

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) return newCollection[i];
    }

    return undefined;
}

const myFilter = function(collection, predicate) {
    const newCollection = standardizeInput(collection);

    const thisArray = [];

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) thisArray.push(newCollection[i]);
    }

    return thisArray;
}

const mySize = function(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
}

// Array Functions

const myFirst = function(arr, stop = false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
}

const myLast = function(arr, start = false) {
    return (start) ? arr.slice(arr.length - start, arr.length) : arr[arr.length - 1];
}

const mySortBy = function(arr, callback) {
    const thisArray = [...arr];
    return thisArray.sort(function(a, b) {
        if (callback(a) > callback(b)) {
            return 1;
        } else if (callback(b) > callback(a)) {
            return -1;
        } else {
            return 0;
        }
    });
}

const unpack = function(receiver, arr) {
    for (let val of arr) {
        receiver.push(val);
    }
}

const myFlatten = function(collection, shallow, thisArray = []) {
    if (shallow) {
        for (let val of collection) {
            Array.isArray(val) ? unpack(thisArray, val) : thisArray.push(val);
        }
    } else {

        for (let val of collection) {
            if (Array.isArray(val)) {

                myFlatten(val, false, thisArray);
            } else {
                thisArray.push(val);
            }
        }
    }
    return thisArray;
}

const myKeys = function(obj) {
    const keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}

const myValues = function(obj) {
    const values = [];
    for (let key in obj) {
        values.push(obj[key]);
    }
    return values;

}