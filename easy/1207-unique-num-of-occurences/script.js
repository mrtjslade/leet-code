// 1207. Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();

    arr.forEach(elem => {
        if(!map.has(elem)){
            map.set(elem, 1);
        } else {
            map.set(elem, map.get(elem) + 1);
        }
    });
    //console.log([...map.entries()]);
    const mapVals = Array.from(map.values());
    const uniqueVals = new Set(mapVals);
    return mapVals.length === uniqueVals.size;
}