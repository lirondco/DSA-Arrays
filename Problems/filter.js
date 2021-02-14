/* 
Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.
*/

const filter = function(array) {
    filteredArray = [];

    for(let i = 0; i < array.length; i++) {
        if(array[i] > 4) {
            filteredArray.push(array[i])
        }
    }
    return filteredArray;
}

console.log(filter([2, 6, 5, 9, 8, 6, 1, 6])); // 6, 5, 9, 8, 6, 6

// This function is O(n)