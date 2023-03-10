let name = "janet";
console.log(name);
let name1 = "Februar";
console.log(name1);

const pie = 3.142;
const color = "blue";

console.log(pie);

let className = "javascript";

let number = 2;

console.log(typeof className);
console.log(typeof number);

let partSentenceOne = "This is a ";
let partSentenceTwo = "complete sentence";
let output = partSentenceOne + partSentenceTwo;
console.log(output);
console.log(`This is a ${partSentenceTwo}`);

let y = 2;
let x = 2;
let z = 5;
let answer = y == z;
console.log(answer);
answer = y == x;
console.log(answer);

let v = 5;
console.log(v);

let y1, x1, z1, result;
x1 = 2;
y1 = 6;
z1 = 22;
answer = x1 + y1;

console.log(answer);
result = z1 - x1;
console.log(result);
result = z1 / x1;
console.log(result);
result = z1 % y1;
console.log(result);
result = y1 ** x1;
console.log(result);

y1++;
console.log(y1);
y1++;
console.log(y1);

z1--;
console.log(z1);

y1 += 2;
console.log(y1);

const pie1 = 3.142;
let r = 2;

let area = pie1 * r * r;
console.log(area);
area = pie1 * r ** 2;
console.log(area);

// 1/2(b*h)

x1 = 4;
y1 = "4";
z1 = 8;

console.log(x1 == y1);
console.log(x1 === y1);
console.log(x1 != y1);
console.log(x1 !== y1);

answer = x1 > z1 && x1 >= y1;
console.log(answer);

answer = x1 > z1 || x1 >= y1;
console.log(answer);

answer = !(x1 > z1) && x1 >= y1;
console.log(answer);
// let numberValue = prompt("enter your grade");

// if (numberValue >= 70) {
//   alert(`Your grade is A ${numberValue} `);
// } else if (numberValue >= 60 && numberValue <= 69) {
//   alert(`Your grade is B ${numberValue} `);
// } else {
//   alert(`OLodo ${numberValue}`);
// }

let student = ["jan", "feb", "mar", "apr", "may", 7];

console.log(student[6]);
// console.log(student[student.length - 1]);

console.log(student[0]);
console.log(student.length - 1);
console.log(student[student.length - 4]);
console.log(student[5]);

student[6] = 25;
console.log(student);
student[0] = 25;
console.log(student);

let st = ["jan", "feb", [1, 2, 4, 5, 7], "mar", "apr", "may", 7];

console.log(st);
console.log(st[2][2]);
let st1 = [
  "jan",
  "feb",
  [1, 2, ["a", "b", "c"], 4, 5, 7],
  "mar",
  "apr",
  "may",
  7,
];
console.log(st1[2][2][1]);
st1[2][2][1] = "d";
st1[2][2][3] = "f";
console.log(st1[2][2]);

let num4 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num3 = [1, 2, 3, 4, ...num4, 5, 6, 7, 8, 9, 10, ...st];

console.log(num3);
// console.log(num4);

for (let i = 15; i >= 5; i--) {
  console.log(i);
}

let k = 10;
while (k >= 1) {
  console.log(k);
  k--;
}

let cars = ["Toyota", "Volvo", "BMW"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
console.log(cars[0]);

// for (let a = 2; a <= 4; a++) {
//   for (let b = 1; b <= 12; b++) {
//     let result = a * b;
//     console.log(`${a} X ${b} = ${result}`);
//   }
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " is even number");
//   } else {
//     console.log(i + " is odd number");
//   }
// }

function namess() {
  console.log("My name is Janet");
}
namess();
namess();
namess();
namess();
function add() {
  let a = 2;
  let b = 3;
  console.log(b + a);
}

add();

const sub = function () {
  let a = 2;
  let b = 3;
  console.log(b - a);
};

sub();

function multiply(p1, p2) {
  //   let answer = p1 * p2;
  console.log("My name is" + " " + p1 + " i'm a " + p2);
}

multiply(1, 3);
multiply(5, 6);
multiply(10, 6);
multiply("janet", "developer");

function areaRect(l, b) {
  let ans = l * b;
  return ans;
}

console.log(areaRect(1, 2));

function areaTr(b, h) {
  let ans = (1 / 2) * b * h + areaRect(2, 3);
  console.log(ans);
}

areaTr(2, 4);

// Default parameter
function people(name = "Janet", job = "Software Developer") {
  console.log("My name is " + name + " " + "I am a " + job);
}
// Invoke the function
people("jumoke", "javascript Developer");

// PRT

function SI(p = 3, r = 3, t = 5) {
  let SI = (p * r * t) / 100;
  return SI;
}

console.log(SI(15, 250, 5));

function callback() {
  // console.log("i'm a callback function");
  let a, b;
  a = 2;
  b = 3;
  return a + b;
}

function studentName(name, age) {
  return `My is ${name}. i'm ${age()} years old`;
}

console.log(studentName("janet", callback));

let arrowData = (x, y) => {
  return x + y;
};

console.log(arrowData(2, 5));

let age = 12;

// if (age == 12) {
//   alert(`Your age is ${age}`);
// }

function studentAge() {
  let newAge = 25;
  console.log(`Your age is ${newAge}`);
}

studentAge();

console.log(age);
// console.log(newAge);

let text = "JavaScript";
let length = text.length;
console.log(length);

console.log(text.toUpperCase());
console.log(text.toLowerCase());

// let userName = prompt("enter your name");
// console.log(userName.toUpperCase());

let school = "This is our training centre";
console.log(school.startsWith("is"));
console.log(school.startsWith("This"));

let stringArray = [
  "This is our training centre",
  "This is our training",
  "Janet",
  "jumoke",
  "jame",
];

for (let i = 0; i < stringArray.length; i++) {
  if (stringArray[i].startsWith("j")) {
    continue;
  } else {
    console.log(stringArray[i]);
  }
}

for (let i = 0; i < stringArray.length; i++) {
  if (stringArray[i].startsWith("j") && stringArray[i] == "jumoke") {
    console.log(stringArray[i]);
    break;
  }
}

let company = "Welcome to Alabian Solution Limited";
console.log(company.indexOf("Alabian"));

let text1 = "  Apple,   Banana, Kiwi  ";
let part = text1.slice(-1);
let part1 = text1.slice(0, 13);
let part2 = text1.substring(0, 13);
console.log(part);
console.log(part1);
console.log(part2);

let text2 = "      Apple, Banana, Kiwi  ";
let withOutTrim = text2.slice(0, 13);

let withTrim = text2.trim();

console.log(withOutTrim);

console.log(withTrim.slice(0, 13));

let text3 = "HELLO WORLD";
let char = text3.charAt(4);
console.log(char);

let y5 = 8.0873;
console.log(y5.toFixed(3));
