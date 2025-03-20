/**
 *
 * @param {string} str - input string
 * @returns {number} - number of vowels in the string.
 *
 */

export const countVowels = (str) => {
    let formattedString = str.toLowerCase();
    let count = 0;
    // loop through the string and count the number of vowels,
    for(let i = 0; i< formattedString.length; i++){
            if(formattedString[i] === 'a' || formattedString[i] === 'o' || formattedString[i] === 'i' || formattedString[i] === 'o' || formattedString[i] === 'u'){
                count++;
            }
    }
    return count++;
}