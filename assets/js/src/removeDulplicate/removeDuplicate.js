// export const removeDuplicate = (arr) => {
//     // create a new array to store unique array
//     const uniqueArr = [];
//
//     for(let i = 0 ; i < arr.length; i++){
//         // check if the current item already exists inside the unique array
//         // if not then push that item to the array.
//         if(!uniqueArr.includes(arr[i])){
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }

export const removeDuplicate = (arr) => Array.from(new Set(arr)); // a set can only contain unique items
/**
 *
 * Array.from(): Array.from() creates a new array from an iterable or array-like object (e.g., strings, NodeLists, Sets, Maps, etc.).
 *
 */