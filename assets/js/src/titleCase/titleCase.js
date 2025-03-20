/**
 *
 * @param {string} str - the input string
 * @returns {string} -  the upper case string
 *
 */
export const titleCase = (str) => {
    // let's split the string into an array of words
    let words = str.toLowerCase().split(' ');
    // toLowerCase() : Converts all characters in a string to lowercase.
    // now we'll loop over the array and capitalize the first character of each word.
    for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        // slice() : Extracts a portion of a string and returns it as a new string.
        // slice(start,end)
        // start : index where extraction begins
        // end : index where extraction stop & is not included(end is optional)
    }
    return words.join(' ');
    // join() : The join() method in JavaScript is used to convert an array into a string by joining its elements with a specified separator.
}