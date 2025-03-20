export const displayLikes = (arr = []) => {
    const arrLength = arr.length;
    let msg = '';
    if(arrLength === 0){
        msg = `No likes`;
    }
    else if(arrLength === 1){
        msg = `${arr[0]} likes this` ;
    }
    else if(arrLength === 2){
        msg = `${arr[0]} & ${arr[1]} likes this` ;
    }
    else if(arrLength === 3){
        msg = `${arr[0]}, ${arr[1]} & ${arr[2]} likes this` ;
    }
    else{
        msg = `${arr[0]}, ${arr[1]} ,${arr[2]} and others likes this` ;
    }
    return msg;
}