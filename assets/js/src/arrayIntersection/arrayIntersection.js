export const arrayIntersection = (arrOne,arrTwo) => {
    const intersectionArray = [];
    for(let i =0 ; i< arrOne.length; i++){
        // loop through the array
        if(arrTwo.includes(arrOne[i]) && !intersectionArray.includes(arrOne[i])){
            // check if the element exists in the second array and the new intersection array.
            intersectionArray.push(arrOne[i]);
        }
    }
    return intersectionArray;
}