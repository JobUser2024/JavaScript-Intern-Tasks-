//The postfix and prefix forms

//Task 1: What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a; 
let d = b++; 

//Answer: c = 2, d = 2

//Task 2: What are the values of a and x after the code below?
let t = 2;
let x = 1 + (t *= 2);

//Answer: 5

// Task 3: What are results of these expressions?

"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px"// 9px
"$" + 4 + 5// $45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 //"   -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1// NaN
" \t \n" - 2 // -2

//Task 4: Here’s a code that asks the user for two numbers and shows their sum.

//It works incorrectly. The output in the example below is 12 (for default prompt values).

//Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

//It should be:

let a = +prompt("First number?", 1); // + added on to the prompt 
let b = +prompt("First number?", 2); // + added on to the prompt

alert(a + b); //3