/**
 *
 * Returns the number of occurrences of a character in a string
 *
 * @param {string} str - the string on which operation has to be performed.
 * @param {string} char - the character which needed to be searched.
 * @return {number} - the number of occurrences of the 'char' in 'str'.
 *
 */

export const count = (str,char) => str.split(char).length - 1;
// split the input 'str' based on 'char',
// if there are `n` occurrences,
// then string will be split into `n+1` array items.

/**
 *
 * The split() method in JavaScript is used to split a string into an array based on a specified separator.
 * => returns an array with string separated from the given `char`
 *
 */