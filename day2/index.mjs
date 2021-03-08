import {getGrade} from "./conditionalStatementsIfElse.js";
import {getLetter} from "./conditionalStatementsSwitch.js";
import {vowelsAndConsonants} from "./loops.js";


let randomnumber;
for(let i = 0; i < 10; i++){
    randomnumber = Math.floor(Math.random() * (30 + 1));
    console.log("score:", randomnumber, "grade", getGrade(randomnumber))
}
console.log(getLetter("adfgt"));
console.log(getLetter("b"));
console.log(getLetter("k"));
console.log(getLetter("q"));
vowelsAndConsonants("javascriptloops");
