// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
  //? one way 
  let subString = "";
  let max = 0;
  for (let i = 0; i < str.length; i++) {
      subString += str[i];

      for (let j = i + 1; j < str.length; j++) {
          if (!subString.includes(str[j])) {
              subString += str[j];
          } else {
              break;
          }
      }

      max = Math.max(max, subString.length);
      subString = ""
  }

  return max;
}

console.log(lengthOfLongestSubString(str1));
console.log(lengthOfLongestSubString(str2));
console.log(lengthOfLongestSubString(str3));
console.log(lengthOfLongestSubString(str4));


//? Another way to solve this algo

function lengthOfLongestSubString(str) {
  let map = {};
  let start = 0;
  let maxLength = 0;
  let arr = str.split("");
  // divides a string into an ordered list of substrings by searching for a pattern, puts returns an array

  for (i = 0; i < str.length; i++) {
    let current = map[arr[i]];
    if (current != null && start <= current) {
      start = current + 1;
    } else {
      // Math.max returns the largest number given as input params or infinite if no params are given
      maxLength = Math.max(maxLength, i - start + 1);
    }
    map[arr[i]] = i;
  }
  return maxLength;
}

console.log(lengthOfLongestSubString(str1));
console.log(lengthOfLongestSubString(str2));
console.log(lengthOfLongestSubString(str3));
console.log(lengthOfLongestSubString(str4));

