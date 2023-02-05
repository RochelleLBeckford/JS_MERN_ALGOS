// would probably have to make a hash mat
// a frequency table -> b/c can make a palindrome if you have even chracters 
// that trackes even or odd occurrences
// one char that's odd
// 
// 

/* 
Given to me (Neil) in an interview

Given a string return whether or not it's possible to make
a palindrome out of the string's characters.

What is it about a string that makes it possible for it to become a
palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */

//? This way -> on the rifht track but did not fully work 
function canStringBecomePalindrome(str) {
    // create a "frequency table"
    // that tracks even or odd occurrences
    // for each char. you can only have
    // one char that's odd
    // want to create a hash map
    // run through the string itself and keep trrack of how many times a character shows up
    
    // check if the length of that str < 1
    if (str.length < 1) {
        // not a palindrome
        return false;
    }

    const newObj = {};
    // iterate through the string 
    for (let char of str) {
        if ( newObj[char]) { // everywhere see str[i] -> char

        }
        else {
            // we need to create it
            // b/c 1st time finding it has a value of 1
            // palindrom -> pairs of characters
            // cattac
            //catbtac -> does not have to compare and it is in the middle
            // 1 odd # or no odd #'s
            // newObj[str[i]] = 1
            newObj[char] = 1
        }
    }
    // for would ++ through the obj we created -> no
    // check each key and ++ through them
    let odd = 0;
    for (const key in newObj) {
        // if the value in key is not a pair not even we odd++ by 1
        // whenever 1 = odd
        if (newObj[key] %2 === 1) {
            odd++;
        }
        // check if the odd is bigger then 1 -> return afalse b/c not paliindrome
        if ( odd > 1) {
            return false;
        }
    }
    // if palindrome
    return true;
}

console.log(canStringBecomePalindrome(str1));
console.log(canStringBecomePalindrome(str2));
console.log(canStringBecomePalindrome(str3));
console.log(canStringBecomePalindrome(str4));
console.log(canStringBecomePalindrome(str5));
console.log(canStringBecomePalindrome(str6));

//? This way it actually works 

function canStringBecomePalindrome(str) {
    if (str.length === 0) {
        return false;
    }

    const leftOverCharsMap = {};
    
    for (const char of str) {
        if (leftOverCharsMap.hasOwnProperty(char)) {
            delete leftOverCharsMap[char];
        } else {
            leftOverCharsMap[char] = true;
        }
    }
    return Object.keys(leftOverCharsMap).length <= 1 ? true : false;
};

console.log(canStringBecomePalindrome(str1));
console.log(canStringBecomePalindrome(str2));
console.log(canStringBecomePalindrome(str3));
console.log(canStringBecomePalindrome(str4));
console.log(canStringBecomePalindrome(str5));
console.log(canStringBecomePalindrome(str6));