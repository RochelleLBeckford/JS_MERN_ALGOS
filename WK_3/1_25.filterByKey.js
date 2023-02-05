/* 
Given an array of objects, a searchFor string, and searchBy key that exists
in the object, return a new array of only those objects whose value for the
given key starts with the given search string.

You can assume the key will exist on the object and the value of that key
will be a string.

Bonus: make the search case insensitive.
Bonus: re-write it with functional programming, using built in methods.
Bonus: allow the search method to be provided as a parameter, e.g.,
    string methods: includes, startsWith, endsWith.
- you can assume the searchMethod will be valid.

This kind of algorithm can be used in react onChange as you type into a
search bar to live-filter a list.
*/

const people = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
    {
        firstName: "Edward",
        lastName: "Kim",
    },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
];

/**
 * Filters the given items based on the search criteria using a startsWith
 * search method.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items The items to be filtered.
 * @param {string} searchFor The value of the given key to search for.
 * @param {string} searchBy The key to search by.
 * @returns {Array<Objects>} The matched items.
 */
//? first way
function functionalFilterByKey(items, searchFor, searchBy) {
    // any kind of functional programming
    // new array -> where we put our answer in
    // for loop
    let expected = [];
                // original array
    for( let i = 0; i < items.length; i++){
        // at one item in the array now have to go inside the obj
        // searching by the key -> searching for the string -> returning the entire object
            // this will get our value
        if( items[i][searchBy].startsWith(searchFor) ){
            // push the item into the new array
                // would give us the value
            expected.push(items[i])
        }
    }
    return expected;
}

console.log(functionalFilterByKey(people, searchFor1, searchBy1));
console.log(functionalFilterByKey(people, searchFor2, searchBy2));
console.log(functionalFilterByKey(people, searchFor3, searchBy3));
console.log(functionalFilterByKey(people, searchFor4, searchBy4));

//? second way w/ filter
/*
// The filter() method creates a new array filled with elements that pass a test provided by a function.
method does not execute the function for empty elements.
The filter() method does not change the original array.
*/

// array.filter(function(current Value, index, arr), thisValue)
// give us back an array that is modified
                                    // word     // key
function functionalFilterByKey(items, searchFor, searchBy) {
    let expected = [];
    // want it to be searchFor & searchBy
    // compare each item agaisnt each item key against each item value
    // like an if statement
    // if the item at searchBy = the item @searchBy that starts w/ searchFor

    expected = items.filter(item => item[searchBy].startsWith(searchFor))

    return expected;
}

console.log(functionalFilterByKey(people, searchFor1, searchBy1));



//? 3rd Way w/ includes method
// literall just change .start w/ .include
// everything has to be case insensitive
function functionalFilterByKey(items, searchFor, searchBy) {
    let expected = [];
    // want it to be searchFor & searchBy
    // compare each item agaisnt each item key against each item value
    // like an if statement
    // if the item at searchBy = the item @searchBy that starts w/ searchFor
    searchFor = searchFor.toLowerCase();
    
    const newArray =items.map((item) => {
        // we've altered each item 
        item[searchBy] = item[searchBy].toLowerCase() // trying to access the key and change the value to lowercase
        // map function giving us a cb -> put the items back to where it was before
        // makes it return the entire bracket
        // no longer an implicit array whe
        return item;
    });
    // console.log(expected);
    console.log(newArray);
    expected = newArray.filter((item) => item[searchBy].includes(searchFor));

    return expected;
}

// console.log(functionalFilterByKey(people, searchFor1, searchBy1));
// console.log(functionalFilterByKey(people, searchFor2, searchBy2));
// console.log(functionalFilterByKey(people, searchFor3, searchBy3));
console.log(functionalFilterByKey(people, searchFor4, searchBy4));

