// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
Input: arr, callback
Output: arr (with elements removed)

Remove every element in the array, starting from idx 0,
until the callback function returns true when passed the
iterated element.

Return an empty array if the callback never returns true
*/

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, cb) {
    // drop elements until reach drop element that is true
    // iterate through original to find the cases that are true push to new arr
    const newArr = [];
    // will be seeing this kind of for loop less and less
    /*
    for( let item of arr) {
        if( cb(num)) newArr.push(num) {
        }
        return newArr;
    }
    */
    for (let i = 0; i < arr.length; i++) {
        // since cb function is already stored -> just call it in an if to see if it's true
            // sending every single element of the array 1 by 1
        if (cb(arr[i])) {
            // if true push to newArr
            newArr.push(arr[i]);
        }
    }
    // console.log(newArr); // just to test
    return newArr;
}

console.log(dropIt(nums1, callback1));
console.log(dropIt(nums2, callback2));
console.log(dropIt(nums3, callback3));