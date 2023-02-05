// ****************************** Insertion Sort *************************
// in-place, stable, comparison sort
// if there are duplicates in the array it will retain the original order for duplicates
// sorted sub-array consists of one card -> at o index
// loop through the rest of the array -> like a bew card handed to us by the dealer
// insert the card in the subarray into the corrct place in array
// store card in array -> move cards to the right if have to to open the correct space for the card we stored
// stored card goes in the right space for the card
// inspect and store each card and move cards to the right if need to to make a space to palce the card.
// if the card to the left is greater than the card is stored to move the card to the right to make space for the final location of the card location
// arrive at the space where the current card is not less than the one to it's left and pop it in

// point of algos -> breaking down a larger problems and break down into smaller sub problems


/* 
- Visualization with playing cards (scroll down):
    https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
- Array / bar visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
- Stable sort, efficient for small data sets or mostly sorted data sets.
Time Complexity
- Best: O(n) linear when array is already sorted.
- Average: O(n^2) quadratic.
- Worst: O(n^2) quadratic when the array is reverse sorted.
Space: O(1) constant.
- this sort splits the array into two portions (conceptually, not literally).
- the left portion will become sorted, the right portion
    (that hasn't been iterated over yet) is unsorted.
can shift OR swap target element until it reaches desired position
shifting steps:
1. consider the first item as sorted
2. move to the next item
3. store current item in a temp var (to make this position available to shift items)
4. if item to the left of current is greater than current item, shift the
    left item to the right.
5. repeat step 4 as many times as needed
6. insert current item
7. move to the next item and repeat
swap steps:
1. consider the first item as sorted
2. move to the next item
4. if item to left of current item is less than current, swap
5. repeat step 4 until item to left is less than current item
6. move to next item and repeat
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */




function instertionSort(nums = []) {
    // your code here
    // unsorted sections and a sorted section
    // start loop at index 1
    // inside for loop will have some logic/conditionals
    // check the positions to it's left
    // move the left positions to the right if needed to open the slot for the current element if needed
    // stores the current index value 
// start loop at index 1
    for(let i = 1; i < nums.length; i++) {
        // inside the loop, write conditional
        // conditional -> check the position to the left
        console.log(`We are at index ${i} and the value is ${nums[i]}`);
        // need to store the current i 
        // temp variable
        let storage = nums[i];
        let j = i - 1; // want the one to the left of the current i

        // two conditions in our while loop to make sure that we are not going out of bouds -> not too far to the left
        // only move #'s to the left if we need to 
        //  condition 1  condition 2
        while(j >= 0 && storage < nums[j]){
            // if ( storage < nums[j]) {
            // [ nums[i - 1], nums[i] ] = [ nums[i], nums[i - 1] ]; // don;t need to destructure
            // console.log(`the new value at index ${i - 1} is ${nums[i - 1]} and at index ${i} is ${nums[i]}`)
            // }
            // move to the right if the condition is true
            nums[j + 1] = nums[j];
            j--
        }
        nums[j + 1 ] = storage;
    }
    // move the left positions to the right if needed
    /// to open the slot for the current element, if needed
    return nums;
}

instertionSort();
console.log(instertionSort(numsRandomOrder));




// export default insertionSort;