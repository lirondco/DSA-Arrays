/* 7. Max sum in the array
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

Input: [4, 6, -3, 5, -2, 1]
Output: 12 */

const maxSum = function(array) {
    let curSum = 0;
    let maxSum = array[0]; //by declaring so, we can still find the largest sum even if it's a negative number
    for(let i=0; i < array.length; i++) {
        curSum += array[i];
        if (curSum > maxSum) {
            maxSum = curSum
        }
    }
    return maxSum;
}

console.log(maxSum([4, 6, -3, 5, -2, 1])) //12

//this is a O(n) function