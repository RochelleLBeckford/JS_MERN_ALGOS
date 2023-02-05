/*
Union is the entire venn diagram together
Intersection is where the two venn diagrams overlap

-> trying to build an ordered intersection

-> challenege -> to get this intsection algo can be done in a single loop

*/

/* 
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).
Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
//? slower version nested for loop
// 1st loop check one element in array A
    // nested will check if element in array a matches array b if matches and element not yet in the expected we push it into the array then go to the next element 
    // more effecient is this way for loop go through element in numsA but less efficient than the one for loop direction
    // nested for loop to go through every element twice
    // compare them then push to a sorted array
    // could use an array method to guide us 
    let expectedArr = [];
    for (let i = 0; i < sortedA.length; i++) {
        // j for loop
        for( let j = 0; j < sortedB.length; j++) {
            // compare the element at index i and the element at index j
            // if sorted element at index i = sorted element at inex j
            // make sure current element is not pushed to expected array -> where we want to return later   
            // does not incliude the current element
            if (sortedA[i] == sortedB[j] && !expectedArr.includes(sortedA[i])) {
                expectedArr.push(sortedA[i]);
            }
        }
    }
    // arr that now stores all the elements in sortedA and sortedB
    return expectedArr;
}

console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));
console.log(orderedIntersection(numsA3, numsB3));


// **********************************************************************
//? fast way set two individual indexes and have it check for that 
function orderedIntersection(sortedA, sortedB) {
    let idxA = 0;
    let idxB = 0;
    let final = [];
    
    while(idxA < sortedA.length && idxB < sortedB.length){
        if(sortedA[idxA] < sortedB[idxB]){
            idxA++
        }
        
        else if(sortedB[idxB] < sortedA[idxA]){
            idxB++
        } 
        
        else if( sortedA[idxA] == sortedB[idxB] && !final.includes(sortedA[idxA])){
            final.push(sortedA[idxA])
        } 
        
        else{
            idxA++
            idxB++
        }
    }
    return final;
}

console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));
console.log(orderedIntersection(numsA3, numsB3));
