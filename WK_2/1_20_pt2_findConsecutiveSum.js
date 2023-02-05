// Interview Algo given to alumni Oct 2019

/* 
You are given a list of integers. Find all the consecutive sets of 
integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
    [2, 5, 3, 6],
    [3, 6, 7],
];

const nums2 = [];
const sum2 = 5;
const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4 = [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0],
];

// Bonus:
const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
    [-2, -5, -3, -6],
    [-3, -6, -7],
    [-3, -6, -7, -0],
    [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */

// since only have one array we only need one for loop since it is just one array 
// want the numbers to be consective
// we want an i pointer
// for loop 
// nested for loop
// j next to i -> inner loop have j go as we i++
// sum variable
// inner for loop we update sum
// sub array -> need to push them in
// as soon as sum = target

function findConsecutiveSums(nums, targetSum) {
    // can run i twice i+1
    const results = [];
    for ( let i = 0; i < nums.length; i++){
        const subArray = [ nums[i] ]; //need this inside of an array
        let sum = nums[i]; // sum needs to be started -> value at i
        
        // checking if nums = current sum # -> keep trying to add to get us there 
        // go until find the right set of #'s whose sum will = current sum value
        for ( let j = i + 1; j < nums.length; j++ ) {
            // add to the sum and push into the sub array 
            // update sum 
            // update subarray
            subArray.push(nums[j]);
            sum += nums[j]; // updating our sum -> add i to j

            // we have hit our target sum
            if ( sum === targetSum ) {
                // put the array into results
                results.push(subArray); 
                // results now has a subArray in there -> get to the end of this for loop and now see what we get
                break /// conmplete for kill -> loop kill 
            }
        }
    }
    return results;
}

//? notes from Ciso:
/*
For the findConsecutiveSums algorithm, if only one of the values is the sum, do not include it in your result.
For example, if the targetSum is 5, and there's a 5 in the nums array, do not include it in your result. Only include sets - more than one value.
*/

console.log(findConsecutiveSums(nums1, sum1));
console.log(findConsecutiveSums(nums2, sum2));
console.log(findConsecutiveSums(nums3, sum3));
console.log(findConsecutiveSums(nums4, sum4));
console.log(findConsecutiveSums(nums5, sum5));

// *******************************************************************************
//? With a while loop
function findConsecutiveSums(nums, targetSum) {
    let start = 0;
    let end = 1;
    let testSum = nums[0];
    const sumArr = [];

    while (end < nums.length) {
        if (testSum === targetSum) {
        const pushArr = []
        for (let i = start; i < end; i++) {
            pushArr.push(nums[i]);
        }
        sumArr.push(pushArr);
        testSum += nums[end];
        end++;
        } else if (Math.abs(testSum) > Math.abs(targetSum)) {
        testSum -= nums[start];
        start++;
        } else {
        testSum += nums[end];
        end++;
        }
    }
    return sumArr;
}

console.log(findConsecutiveSums(nums1, sum1));
console.log(findConsecutiveSums(nums2, sum2));
console.log(findConsecutiveSums(nums3, sum3));
console.log(findConsecutiveSums(nums4, sum4));
console.log(findConsecutiveSums(nums5, sum5));



// *******************************************************************
function findConsecutiveSums(nums, targetSum) {
  // your code goes here
    let answer=[];
    let sum;
    for( let i=0;i<nums.length;i++ ){
        sum=nums[i];
        if(sum===targetSum){
        answer.push(nums.slice(i,i));
        }
        else if(sum<targetSum || (targetSum<0)){
        for( let j=i+1; j<nums.length;j++){
            sum+=nums[j];
            
            if(sum===targetSum){
            answer.push(nums.slice(i,j+1));
            }
            else if(sum>targetSum && targetSum>0){
            break;
            }
        }
        }
    }
    return answer;
}

console.log(findConsecutiveSums(nums1, sum1));
console.log(findConsecutiveSums(nums2, sum2));
console.log(findConsecutiveSums(nums3, sum3));
console.log(findConsecutiveSums(nums4, sum4));
console.log(findConsecutiveSums(nums5, sum5));