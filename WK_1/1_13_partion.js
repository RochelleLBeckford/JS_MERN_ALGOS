// ****************************** Partition Helper Function **************************
/*
All the values less than the pivot are to it's left
All the values greater than the pivot are to it's right
*/

// accept an unsorted array
/*
-> the ending value is our pivot value -> arr.lenght - 1
-> start inded as pivot index -> 0 initially
-> loop through the array and stop before the pivot value
-> stop and 2nd to last
-> if the current value is <+ than the pivot value will swap it at the pivot index
-> everytime we swap we increment the pivot index
-> ++ to the next value
-> next vaule is >= pivot value we do not switch
-> ++ to the next value
-> at the end of for loop we swap the value at the pivot index with the pivot value
*/




/* 
Params: nums, start, end
- start and end are indexes
- start will be 0, and end will be the last idx.
Steps:
1. Select the last element to be your pivot value.
2. The pivot index begins at start.
3. Loop through nums from start to end.
4. If the current value is less than or equal to the pivot value,
    swap the current value with the value at the pivot index
    and increment the pivot index.
5. After the loop, swap the value at pivot index
    with the pivot value at end.
6. Finally, return the pivot index,
    the index where the left section of smaller values end.
*/

// changing eveything so that everything to the left of 7 (pivot value is whatever # is at the end) is less than 7 and everything is greater than 7
// pivot index is always at the start -> 11
// comparing index to pivot value 
// compare if pivot index (11) is <= pivot vlaue (7)
// if it is less than than we swap the pivot index with the current # -> smaller # goes to the left
// pivot index is larger we do not swap -> we ++ and look at the the next # 
// pivot index does not ++ unless it swaps so still at 0
// pivot index is less than pivot value -> we swap ++ by 1 only when we do a swap
// not necessarily in numerical order but less is on one side of the pivot and larger is one side of the pivot

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the last
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to its left and all larger numbers to its right.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The idx where left section of smaller items ends.
 */
// pivot value: value at end of nums
// pivot index: start
// for loop:
  // if condition inside loop
  // what does the if condition look like?
  // inside the if, we swap current value with
  // value at pivot index and
  // increment pivot index
// after for loop, swap pivot value with
// value at pivot index
// return pivot index
function partition( nums = [], start = 0, end = nums.length - 1 ) {
    // don't want to sort the pivot value -> value at an index
    // use const b/c pivNum value will not change but can use let since using a quick sort
    const pivNum = nums[end];
    // let since we will be chaning pivot index
    let pivIdx = start; 
    for ( let i = start; i < end; i++ ){
        // compare pivNum to the value of the array nums at pivIdx
        if ( nums[i] <= pivNum ) {
            // // if we swap we ++ pivIdx
            // pivIdx++;
            // swap the # num[i] with value at pivIdx 
            [nums[i], nums[pivIdx]] = [nums[pivIdx], nums[i]];
            console.log(`i: ${i}, nums: ${nums}`)
            // if we swap we ++ pivIdx
            pivIdx++;
        }
    }
    // only time we move the pivot value (end) with the pivot Index so that it goes in the center
    // [nums[pivIdx + 1], pivNum] = [pivNum, nums[pivIdx + 1]];
    [nums[pivIdx], nums[end]] = [nums[end], nums[pivIdx]];
    // return pivIdx + 1;
    console.log(nums);
    // return pivIdx + 1;
    return pivIdx;
}

console.log(partition(nums1));
console.log(partition(nums2));
console.log(partition(nums3));
console.log(partition(nums4));





export default partition;
