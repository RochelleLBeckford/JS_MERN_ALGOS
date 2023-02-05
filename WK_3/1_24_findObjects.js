/* 
Given:
- a search criteria object with primitive values only (ints,
    strings, booleans)
- a list of objects

Return any object that matches all the key value pairs in the search
criteria object.

Bonus: write a 2nd solution using built-in methods to practice functional
programming.
*/



const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};

const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};

const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */


// returning an array of objects that match the search criteria of the list of objects
// whatever asking for in search criteria we bring up that data -> 
    // isolate the search criteria
    // returns a string array 
    // console.log(values);
    // console.log(keys);

    // let us run this check over everything over the array
    // collection.map( obj => {
        // collection.filter and catch that in an array
        // we're in the same place
        // check the keys that it has
                // got to give it the obj looking in and the property -> the key that you are looking for
                        // also a method and takes in a cb
        // cb -> arrow function 
        // since checking keys just call it key
        // then need to return a boolean
        // hasOwn is recommended over hasOwnProperty
        // pass in property -> pass down the 2 keys we are checking
        // should run every where for firstname and age
            // console.log(obj);

    // ++ through array of objects
    // only one param don't need ()'s
    // passing down our objs -> have access to individual keys and values
        // need an inner loop to check through each 
// array.map check the keys[0] & keys[1] -> match what the search criteria is asking
// trying to check on the variable amount of keys -> don't always want to check that set amount
// every is an array method so it will work since we are 



// /**
//  * - Time: O(?).
//  * - Space: O(?).
//  */
// function findObjectsFunctional(criteria, collection) {
//     // your code here
// }

// .every -> give it a predicate (boolean) and cb function ca -> only return the 

//? One way 


function findObjects(criteria, collection) {
    let expected = [];

    expected = collection.filter(function (el) {
        return Object.keys(criteria).every((key) => el[key] == criteria[key]);
    });
    return expected;
};

console.log(findObjects(searchCriteria1, items));
console.log(findObjects(searchCriteria2, items));



//?. Another way 


function findObjectsFunctional(criteria, collection) {
    // your code here
    let answers =[]

    for ( let i = 0; i < collection.length; i++){
        let found = true
        for (key in criteria){
        if (criteria[key] !== collection[i][key]){
            found = false
            break;
        }
        }
        if (found === true){
        answers.push(collection[i])
        }
    }
    return answers;
}

console.log(findObjectsFunctional(searchCriteria1, items))
console.log(findObjectsFunctional(searchCriteria2, items))


