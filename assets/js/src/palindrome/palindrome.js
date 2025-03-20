import {reverseString} from "../reverseString/reverseString.js";

/**
 *
 * @param {string} str - input string
 * @returns {string} - result.
 *
 */
export const palindrome = (str) => {
    let formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // using regular expression to eliminate alpha numeric chars.
    let reversedString = reverseString(formattedString); // using previously created function.
    return reversedString === formattedString ? "It's Palindrome" : "Its not Palindrome";
}