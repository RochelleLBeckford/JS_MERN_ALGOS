//? Disjunctive Union
/*
? Given two arrays of ints
-> return the symmetric differences, (aka disjunctive union)
-> these are the elements which are in either of the sets and not their intersection (the union without the intersection)
-> think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
-> i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)

? Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const setA1 = [1, 2];
const setB1 = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const setA4 = [];
const setB4 = [];
const expected4 = [];

const setA5 = [];
const setB5 = [1, 2, 3];
const expected5 = [1, 2, 3];

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(?).
 * - Space: O(?).
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */

/*
-> use a for loop to go through the array
-> nested for loop -> compare the elements from A1 to B1
    -> ie. compare value of A1[0] to all of B1 array to see if that value is there
-> unique #'s in expected output 
-> every number we like we can store in a new array and then return that array
*/

function symmetricDifferences(numsA, numsB) {
    let newArr = []; // result array
    for ( let i = 0; i < numsA.length; i++) {
        for ( let j = 0; j < numsB.length; j++) {
                                        // this needs to be the opposite so ! before the arr
                                        // want the opposite -> only want to push if not in the array
            // if numsA !== include numsB
            if ( !numsA.includes(numsB[j]) && !numsB.includes(numsA[i]) && !newArr.includes(numsA[i]) && !newArr.includes(numsB[j]) ) {
                newArr.push( numsA[i] );
                newArr.push( numsB[j] );
            }
        // console.log()
        }
    }
    console.log( newArr );
}

symmetricDifferences(setA1, setB1);
symmetricDifferences(setA2, setB2);
symmetricDifferences(setA3, setB3);
symmetricDifferences(setA4, setB4);
symmetricDifferences(setA5, setB5);



// export default symmetricDifferences;