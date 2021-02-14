/* Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11] */

const mergeArrays = function (array1, array2) {
    const initMerge = [...array1, ...array2];
    const finalMerge = initMerge.sort((a,b)=> a - b);
    console.log(finalMerge)
}

mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]) // 1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11

