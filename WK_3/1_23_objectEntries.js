/* 
Recreate Object.entries method

Given an object, return an array of arrays of the object's
key value pairs, where each key value pair is a 2 item array.

Do not include key value pairs from the given object's
prototype (these are included by default when looping over an
object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};

const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };

// This object contains inherited key value pairs from the above proto obj.
const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
});

const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];
// console.log(obj2);




/**
 * Returns a 2d array of key value pairs from the given obj.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} obj
 * @typedef {Array<Array<string, any>>} output The nested array should look
 *    like [key, val]
 * @returns {output}
 */

// tell why the code is there not what is there
// create a NEW ARRAY RIGHT AWAST
// LOOP OVER THAT ONBJECT
// CREAT AN ARRAYW/ KEY VALUE PAIRS RIGHT AFTER EACH OTHER
// CONTINUE UNTIL THE LOOP IS DONE

function entries(obj) {
    // after each ++ push into subArr 
    let newArr = []; //outside arr
            // store key 
    for ( let key in obj ) { //loop throug onj and acces properties through key 
        // if not this will happen
        // to remove inheritance and keyOnProto
        // if use hasOwnProperty -> returns a boolean [ true or false]
            // obj.hasOwn(key) -> come back true or false if inherited
                // if inherited from somewhere else will make them false
        if ( key !== 'inheritance' && key !== 'keyOnProto' ) {
            // obj is how we're loopin -> to access values 
            let subArr = []; // create subArr -> inside a1st arr
            subArr.push(key); // push key-> placeholder obj in 1st loop
            // how you access the value of that obj
            subArr.push(obj[key]); // 
            newArr.push(subArr);
            console.log(key);
        }
    }
    return newArr;
}
console.log(entries(obj1));
console.log(entries(obj2));

