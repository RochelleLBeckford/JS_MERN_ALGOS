// ************************ MultiSet Union *************************
/*
? Set Theory
-> a set out of one array cannot have any duplicates
-> contains no duplicates
-> set out of the intersection of 2 arrays
intersection elements shared by both arrays
*/

/* 
Union Sorted Arrays

Efficiently combine two already-sorted multiset arrays
into a new sorted array containing the multiset union.

Unions by default will take the set of dupes
that has the highest occurrences from one array.

Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];
/* 
Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
because it occurs 3 times at most in ONE set
*/

/*
? Union Theory
-> ordered multi-set union
-> union -> elements shared btw both arrays
-> retunr an array w/ elements shared btw both arrays
-> multi-set -> set that allos duplicates
-> repeated entries in the result
-> unions by defaulkt will take the highest occurance of an element from one array
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */

function orderedMultisetUnion(sortedA, sortedB) {
    // your code here
    // whole point is to join two arrays -> union array will have the element with the highest occurance
    const multiSet = [];
    let i = 0;
    let j = 0;
// won't need nested want push everything one at a time 
// length will stop when one of i or j reaches the end of the array -> won't continue forever
    if (sortedA.length === 0) {
        return sortedB;
    }

    if (sortedB.length === 0) {
        return sortedB;
    }

    // or so it goes through both arrays
    while ( i < sortedA.length || j < sortedB.length ) {
        // compare i and j and see to check if one is there then push tonthe array
        if ( sortedA[1] === sortedB[j]) {
            multiSet.push(sortedA[i]);
            i++;
            j++;
        }

        else if( sortedA[i]){

        }

        else {
            multiSet.push(sortedA[i]);
            i++
        }
    }
    return multiSet;
}

console.log(orderedMultisetUnion(nums1A, nums1B));
console.log(orderedMultisetUnion(nums2A, nums2B));
console.log(orderedMultisetUnion(nums3A, nums3B));
console.log(orderedMultisetUnion(nums4A, nums4B));
console.log(orderedMultisetUnion(nums5A, nums5B));




// **************************************************************************
function orderedMultisetUnion(sortedA, sortedB) {
  // your code here
    let idA = 0;
    let idB = 0;
    const union = [];

    while (idA < sortedA.length && idB < sortedB.length) {
        if (sortedA[idA] === sortedB[idB]) {
        union.push(sortedA[idA]);
        idA++;
        idB++;
        } else if (sortedA[idA] < sortedB[idB]) {
        union.push(sortedA[idA]);
        idA++;
        } else {
        union.push(sortedB[idB]);
        idB++;
        }
    }

    while (idA < sortedA.length) {
        union.push(sortedA[idA]);
        idA++;
    }
    
    while (idB < sortedB.length) {
        union.push(sortedB[idB]);
        idB++;
    }

    return union;
}

console.log(orderedMultisetUnion(nums1A, nums1B));
console.log(orderedMultisetUnion(nums2A, nums2B));
console.log(orderedMultisetUnion(nums3A, nums3B));
console.log(orderedMultisetUnion(nums4A, nums4B));
console.log(orderedMultisetUnion(nums5A, nums5B));