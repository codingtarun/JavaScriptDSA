/**
 *
 * @param {array} arr - the array of random numbers.
 * @returns {number} - the maximum number in array.
 *
 */

// export const maxNumber = (arr) => Math.max(...arr); // Using inbuilt JS method.

export const maxNumber = (arr) => {
    let max = arr[0];
    for(let i = 0 ; i< arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}