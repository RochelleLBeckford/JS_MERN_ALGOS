import partition from "./1_13_partion.js";

// ****************************** Quick Sort - recursive function ************************
/*
-> takes in an array 
-> nums has dafault value of an empty array []
-> don't the defaults in the function b/c it will always be 0
    -> js will helps us out through default values

-> if statement is base case
    -> when the pointers cross each other we want them to break out of recursion

function quickSort (nums = [], start = 0, end = nums.length - 1){
    if (start < pivotIndex)
}
*/

/* 
Create a function that uses partition to fully sort an array
in-place.
Unstable sort.

Time Complexity
    - Best: O(n log(n)) linearithmic.
    - Average: O(n log(n)) linearithmic.
    - Worst: O(n^2) quadratic.

Space: O(1) constant.
Params: nums, left, right
- left and right are indexes, for now, left will be 0, and right will be the
    last idx.
- later these params will be used to specify a sub section of the array to
    partition.
Steps:
    - start by partitioning the full array
        (use the previously built partition algo).
    - then partition the left side of the array
        (left of the returned partition idx) and the right side
        (right of the returned partition idx), recursively.
*/


const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const nums4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */

// calling 
function quickSort(nums = [], start = 0, end = nums.length - 1) {
    if (start < end) {
        const pivotIdx = partition(nums, start, end);
        // recursive calls -> change the values to left and right of it to swap and full sort
        // middle out from left to right 
        quickSort(nums, start, pivotIdx - 1);
        quickSort(nums, pivotIdx + 1, end);
    }
    return nums;
}

console.log(quickSort(nums1))
console.log(quickSort(nums2))
console.log(quickSort(nums3))
console.log(quickSort(nums4))

export default quickSort;
