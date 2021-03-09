import {getSecondLargest} from "./arrays.js";
import {reveseString} from "./tryCatchFinally.js";
import {isPositive} from "./thrown.js";

console.log(getSecondLargest([2, 3, 6, 6, 5]));
reveseString("1234");
reveseString(Number(1234));
console.log(isPositive(3));
console.log(isPositive(2));
console.log(isPositive(0));
console.log(isPositive(6));
