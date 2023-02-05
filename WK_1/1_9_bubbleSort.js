//***************************** Bubble Sort ***************************
/*
In general when sort w/ trying to sort the smallest number in general

? Bubble Sort
- Algos -> most ppl use Bubble Sort
- want to make sure that the largest # is at the end
- we continue to check and comepare index 0 with index 1 and if index 0 is greater than index 1 then we swap.
- we continue this action until the largest is the last index
- the algo will continue until the sort is complete
- we have an indez that we keep on swapping until the largest is at the end
*/

/* 
https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
Stable sort

Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
Space: O(1) constant.
For review, create a function that uses BubbleSort to sort an unsorted array in-place.
For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */

function bubbleSort( nums = [] ) {
    // while loop to nest for loop to go through the loop ->
    //great start to move through the loop
    // condition to keep checking - sorted array
    // -> is my for loop sorted if not keep going
    // if not then run this for loop again
    // var for boolean
    let isSorted = false;
    // use isSorted it won't work b/c it is false -> won't work
    // ! in front a boolean will say if not false is true
    while ( !isSorted === false ) {
        isSorted = true; // i want to change isSorted to false each time we work through the index 
        // -> index 1 < the previous value then say false since it is not sorted yet.
        // if it is greater than the previous # then it is sorted and move to the next index
                                    // -1 so we get the last index of the array
        for ( let i = 0; i < nums.length - 1; i++ ) {
            // if the current i location is greater then the next i location -> swap
            if ( nums[i] > nums[i + 1] ) {
                temp = nums[i + 1];
                nums[i + 1] = nums[i];
                nums[i] = temp // this is the swap part 
            }
        }
    }
    return nums;
}

console.log(bubbleSort(numsOrdered));
console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsReversed));

