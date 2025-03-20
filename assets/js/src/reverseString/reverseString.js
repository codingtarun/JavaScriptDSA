/**
 *
 * @param {string} str - the input string
 * @returns {string} - the reversed string
 *
 */

//export const reverseString= (str) => str.split('').reverse().join(''); // using inbuilt JS function

export const reverseString = (str) => {
    let reversedString = ``;
    for(let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}