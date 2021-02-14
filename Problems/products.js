/* 
Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27]
*/

const products = function(array) {
    let prodArray = [];

    for (let i = 0; i < array.length; i++) {
        let curPos = i;
        let prod = 1;

        for (let j = 0; j < array.length; j++) {
            if (curPos !== j) {
                prod *= array[j];
            }
        }
        prodArray.push(prod)
    }
    return prodArray;
}

console.log(products([1, 3, 9, 4])) //108, 36, 12, 27