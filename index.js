/*
console.log("hello world");
document.write("hello world");
jdkkldkdmddbdkl mmmnmn */

// var keyword
var name = "janet";
var name = "jumoke";
var name;
console.log(name);

// let keyword

let className = "Javascript";
console.log(className);
className = "CSS";
console.log(className);

let className1 = "html";

// const keyword

const pie = 3.142;
console.log(pie);
// const pie= 22/7; //Cannot redeclare block-scoped variable 'pie'.
// pie = 2; // Assignment to constant variable.
console.log(pie);

// String data type
let myName = "2";
console.log(typeof myName);
console.log(myName);
let answer1 = "It's alright";
let answer2 = "'Alabian' solution";
let answer3 = '"Alabian" solution';
console.log(answer2);
console.log(answer1);
console.log(answer3);

// String concatenation:

let partSentenceOne = "This is a ";
let partSentenceTwo = "complete sentence";
let output = partSentenceOne + partSentenceTwo;
console.log(output);
let numberOne = "2";
let numberTwo = 3;

output = numberOne + numberTwo;
console.log(output);

let x = 5;
let y = 5;
let z = 6;
let boolean = true;
console.log(typeof boolean);
console.log(x == z);

let k;
console.log(k);
// Addition
let a = 3;
let b = 5;
let result = a + b;
console.log(result);
result = b - a;
console.log(result);

result = a * b;
console.log(result);

result = b / a;
console.log(result);

result = b % a;
console.log(result);

result = b ** a;
console.log(result);

// area of triangl 1/2 bh
let b1 = 2;
let h = 5;
let area;
area = (1 / 2) * b1 * h;
console.log(area);
// 1/2(a+b)h

k = 2;
// k++;
// console.log(k);
// k++;
// console.log(k);
let num = k;
console.log(k);

k += 3;
console.log(k);
k += 3;
console.log(k);
let b2 = "2";
let b3 = 2;
let ans = b2 == b3;
console.log(ans);

ans = b2 === b3;
console.log(ans);

ans = b2 != b3;
console.log(ans);

ans = b2 !== b3;
console.log(ans);

ans = b2 <= b3;
console.log(ans);

ans = b2 >= b3;
console.log(ans);

let HTML = true;
let isDeveloper = false;
let CSS = true;

console.log(HTML && isDeveloper);
console.log(HTML && CSS);
console.log(HTML && !CSS);
console.log(HTML || !CSS);
console.log(HTML || isDeveloper);
console.log(isDeveloper || !CSS);

ans = b2 == 2 && b3 == 3;
console.log(ans);

ans = b2 == 2 || b3 == 3;
console.log(ans);

const age = prompt("enter your age");
let user = prompt("enter your name");

if (user == "janet" && age < 18) {
  //   console.log("Sorry, you are not old enough to play");
  alert("Sorry, you are not old enough to play");
} else if (age > 70) {
  console.log("you are too old to play");
} else {
  console.log("You can play");
}
