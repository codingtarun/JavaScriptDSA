export const  fizzBuzz = (range) => {
    const fizzBuzzArray = [];
    for(let i = 1; i <= range; i++) {
        if(i % 3 === 0 ){
            fizzBuzzArray.push('FIZZ');
        }else if(i % 5 === 0 ){
            fizzBuzzArray.push('BUZZ');
        }else if(i % 5 === 0 && 1 % 3 === 0 ){
            fizzBuzzArray.push('FIZZBUZZ');
        }
        else{
            fizzBuzzArray.push(i);
        }
    }
    return fizzBuzzArray;
}