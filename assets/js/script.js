// importing all required function at the top of the page.
import { calculator } from "./src/calculator/calculator.js";
import {count} from "./src/count/count.js";
import {maxNumber} from "./src/maxNumber/maxNumber.js";
import {titleCase} from "./src/titleCase/titleCase.js";
import {reverseString} from "./src/reverseString/reverseString.js";
import {palindrome} from "./src/palindrome/palindrome.js";
import {countVowels} from "./src/countVowels/countVowels.js";
import {removeDuplicate} from "./src/removeDulplicate/removeDuplicate.js";
import {fizzBuzz} from "./src/fizzBuzz/fizzBuzz.js";
import {arrayIntersection} from "./src/arrayIntersection/arrayIntersection.js";
import {displayLikes} from "./src/displayLikes/displayLikes.js";
import {findMissingNumber} from "./src/findMissingNumber/findMissingNumber.js";

// Execution function
console.log(calculator(2,4,"+"));
console.log(count('Tarun Chauhan','u'));
console.log(maxNumber([2,4,6,5,2,1,10,34,23,1,2]));
console.log(titleCase("Hello my name is tarun chauhan"));
console.log(reverseString('arun chauhan'));
console.log(palindrome('racecar'));
console.log(countVowels("An orchardist who codes"));
console.log(removeDuplicate([1,2,3,3,3,3,33,3,4,5,'a','a','a','a','a','a',4,1,3,5,7,7,7,7,7,79,8,7,6,6,7,8]));
console.log(fizzBuzz(50));
console.log(arrayIntersection([1,2,3,4,5,6,7,8,9,9,9],[3,4,6,8,9,0,6,5,4,5,6]));
console.log(displayLikes(['Tarun','Priya','Hope','Bimla']));
console.log(displayLikes(['Tarun','Priya','Hope']));
console.log(displayLikes(['Priya','Hope']));
console.log(displayLikes(['Tarun']));
console.log(displayLikes());
console.log(findMissingNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20]));