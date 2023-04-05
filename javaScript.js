// let name = "janet";
// console.log(name);
// let name1 = "Februar";
// console.log(name1);

// const pie = 3.142;
// const color = "blue";

// console.log(pie);

// let className = "javascript";

// let number = 2;

// console.log(typeof className);
// console.log(typeof number);

// let partSentenceOne = "This is a ";
// let partSentenceTwo = "complete sentence";
// let output = partSentenceOne + partSentenceTwo;
// console.log(output);
// console.log(`This is a ${partSentenceTwo}`);

// let y = 2;
// let x = 2;
// let z = 5;
// let answer = y == z;
// console.log(answer);
// answer = y == x;
// console.log(answer);

// let v = 5;
// console.log(v);

// let y1, x1, z1, result;
// x1 = 2;
// y1 = 6;
// z1 = 22;
// answer = x1 + y1;

// console.log(answer);
// result = z1 - x1;
// console.log(result);
// result = z1 / x1;
// console.log(result);
// result = z1 % y1;
// console.log(result);
// result = y1 ** x1;
// console.log(result);

// y1++;
// console.log(y1);
// y1++;
// console.log(y1);

// z1--;
// console.log(z1);

// y1 += 2;
// console.log(y1);

// const pie1 = 3.142;
// let r = 2;

// let area = pie1 * r * r;
// console.log(area);
// area = pie1 * r ** 2;
// console.log(area);

// // 1/2(b*h)

// x1 = 4;
// y1 = "4";
// z1 = 8;

// console.log(x1 == y1);
// console.log(x1 === y1);
// console.log(x1 != y1);
// console.log(x1 !== y1);

// answer = x1 > z1 && x1 >= y1;
// console.log(answer);

// answer = x1 > z1 || x1 >= y1;
// console.log(answer);

// answer = !(x1 > z1) && x1 >= y1;
// console.log(answer);
// // let numberValue = prompt("enter your grade");

// // if (numberValue >= 70) {
// //   alert(`Your grade is A ${numberValue} `);
// // } else if (numberValue >= 60 && numberValue <= 69) {
// //   alert(`Your grade is B ${numberValue} `);
// // } else {
// //   alert(`OLodo ${numberValue}`);
// // }

// let student = ["jan", "feb", "mar", "apr", "may", 7];

// console.log(student[6]);
// // console.log(student[student.length - 1]);

// console.log(student[0]);
// console.log(student.length - 1);
// console.log(student[student.length - 4]);
// console.log(student[5]);

// student[6] = 25;
// console.log(student);
// student[0] = 25;
// console.log(student);

// let st = ["jan", "feb", [1, 2, 4, 5, 7], "mar", "apr", "may", 7];

// console.log(st);
// console.log(st[2][2]);
// let st1 = [
//   "jan",
//   "feb",
//   [1, 2, ["a", "b", "c"], 4, 5, 7],
//   "mar",
//   "apr",
//   "may",
//   7,
// ];
// console.log(st1[2][2][1]);
// st1[2][2][1] = "d";
// st1[2][2][3] = "f";
// console.log(st1[2][2]);

// let num4 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// let num3 = [1, 2, 3, 4, ...num4, 5, 6, 7, 8, 9, 10, ...st];

// console.log(num3);
// // console.log(num4);

// for (let i = 15; i >= 5; i--) {
//   console.log(i);
// }

// let k = 10;
// while (k >= 1) {
//   console.log(k);
//   k--;
// }

// let cars = ["Toyota", "Volvo", "BMW"];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }
// console.log(cars[0]);

// // for (let a = 2; a <= 4; a++) {
// //   for (let b = 1; b <= 12; b++) {
// //     let result = a * b;
// //     console.log(`${a} X ${b} = ${result}`);
// //   }
// // }

// // for (let i = 0; i <= 20; i++) {
// //   if (i % 2 == 0) {
// //     console.log(i + " is even number");
// //   } else {
// //     console.log(i + " is odd number");
// //   }
// // }

// function namess() {
//   console.log("My name is Janet");
// }
// namess();
// namess();
// namess();
// namess();
// function add() {
//   let a = 2;
//   let b = 3;
//   console.log(b + a);
// }

// add();

// const sub = function () {
//   let a = 2;
//   let b = 3;
//   console.log(b - a);
// };

// sub();

// function multiply(p1, p2) {
//   //   let answer = p1 * p2;
//   console.log("My name is" + " " + p1 + " i'm a " + p2);
// }

// multiply(1, 3);
// multiply(5, 6);
// multiply(10, 6);
// multiply("janet", "developer");

// function areaRect(l, b) {
//   let ans = l * b;
//   return ans;
// }

// console.log(areaRect(1, 2));

// function areaTr(b, h) {
//   let ans = (1 / 2) * b * h + areaRect(2, 3);
//   console.log(ans);
// }

// areaTr(2, 4);

// // Default parameter
// function people(name = "Janet", job = "Software Developer") {
//   console.log("My name is " + name + " " + "I am a " + job);
// }
// // Invoke the function
// people("jumoke", "javascript Developer");

// // PRT

// function SI(p = 3, r = 3, t = 5) {
//   let SI = (p * r * t) / 100;
//   return SI;
// }

// console.log(SI(15, 250, 5));

// function callback() {
//   // console.log("i'm a callback function");
//   let a, b;
//   a = 2;
//   b = 3;
//   return a + b;
// }

// function studentName(name, age) {
//   return `My is ${name}. i'm ${age()} years old`;
// }

// console.log(studentName("janet", callback));

// let arrowData = (x, y) => {
//   return x + y;
// };

// console.log(arrowData(2, 5));

// let age = 12;

// // if (age == 12) {
// //   alert(`Your age is ${age}`);
// // }

// function studentAge() {
//   let newAge = 25;
//   console.log(`Your age is ${newAge}`);
// }

// studentAge();

// console.log(age);
// // console.log(newAge);

// let text = "JavaScript";
// let length = text.length;
// console.log(length);

// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// // let userName = prompt("enter your name");
// // console.log(userName.toUpperCase());

// let school = "This is our training centre";
// console.log(school.startsWith("is"));
// console.log(school.startsWith("This"));

// let stringArray = [
//   "This is our training centre",
//   "This is our training",
//   "Janet",
//   "jumoke",
//   "jame",
// ];

// for (let i = 0; i < stringArray.length; i++) {
//   if (stringArray[i].startsWith("j")) {
//     continue;
//   } else {
//     console.log(stringArray[i]);
//   }
// }

// for (let i = 0; i < stringArray.length; i++) {
//   if (stringArray[i].startsWith("j") && stringArray[i] == "jumoke") {
//     console.log(stringArray[i]);
//     break;
//   }
// }

// let company = "Welcome to Alabian Solution Limited";
// console.log(company.indexOf("Alabian"));

// let text1 = "  Apple,   Banana, Kiwi  ";
// let part = text1.slice(-1);
// let part1 = text1.slice(0, 13);
// let part2 = text1.substring(0, 13);
// console.log(part);
// console.log(part1);
// console.log(part2);

// let text2 = "      Apple, Banana, Kiwi  ";
// let withOutTrim = text2.slice(0, 13);

// let withTrim = text2.trim();

// console.log(withOutTrim);

// console.log(withTrim.slice(0, 13));

// let text3 = "HELLO WORLD";
// let char = text3.charAt(4);
// console.log(char);

// let y5 = 8.0873;
// console.log(y5.toFixed(3));

// let myColor = ["Red", "Green", "White", "Black"];

// let color3 = myColor.toString();
// console.log(color3);
// color3 = myColor.join();
// console.log(color3);

// console.log(typeof color3);

// let arrayList = [
//   "janet",
//   "David",
//   "Seyi",
//   '<script  type="text/javascript" src="https://www.todojavascript.js"></script>',
//   '<script  type="text/javascript" src="https://www.todojavascript/todo.js"></script>',
//   '<script  type="text/javascript" src="todo.js"></script>',
//   '<script  type="text/javascript" src="todo2.js"></script>',
// ];

// for (let index = 0; index < arrayList.length; index++) {
//   if (arrayList[index].includes("https://")) {
//     console.log(arrayList[index]);
//     // break;
//   }
// }

// for (let index = 0; index < arrayList.length; index++) {
//   if (arrayList[index].charAt(1) === "a") {
//     console.log(arrayList[index]);
//     // break;
//   }
// }

// console.log(parseInt("-10"));
// console.log(parseInt("10"));
// console.log(parseInt("10.33"));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);
// fruits.push("kiwi");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.unshift("cucumba");
// console.log(fruits);
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myBoys.concat(myGirls);
// console.log(myChildren);

// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// const myFruits = fruits1.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits1);

// const myFruits2 = fruits1.slice(2);
// fruits1.sort();
// console.log(fruits1);
// fruits1.reverse();
// console.log(fruits1);
// let number4 = [1, 4, 3, 7, 8, 5, 2];
// number4.sort();
// number4.reverse();
// console.log(number4);

// const fruitss = ["Banana", "Orange", "Apple", "Mango"];
// const myFruitss = fruitss.join(" + ");
// console.log(myFruitss);

const cars = ["Toyota", "Benz", "Ferrari", "Volvo", "Toyosi"];
cars.forEach(function (p) {
  console.log("I love " + p);
});

cars.forEach((car) => {
  console.log(car);
});

let newCars = cars.map((car) => {
  return " This is " + car;
});
console.log(newCars);
console.log(typeof newCars);
cars.map((car) => {
  console.log(car);
});

const filteredCar = cars.filter(function (car) {
  return car === "Ferrari";
});

console.log(filteredCar);

let arrayList = [
  "janet",
  "David",
  "Seyi",
  '<script  type="text/javascript" src="https://www.todojavascript.js"></script>',
  '<script  type="text/javascript" src="https://www.todojavascript/todo.js"></script>',
  '<script  type="text/javascript" src="todo.js"></script>',
  '<script  type="text/javascript" src="todo2.js"></script>',
];

const scripts = arrayList.filter((script) => {
  return script.includes("script");
});
console.log(scripts);

scripts.map((p) => {
  console.log(p);
});

const findCar = cars.find(function (car) {
  return car === "Toyota";
});
console.log(findCar);

const person = {
  name: "John",
  age: 20,
  marks: { science: 70, math: 75 },
  greet: function () {
    console.log("hello world");
  },
  add: function (p, x) {
    return p + x;
  },
};
console.log(person.name);
console.log(person["name"]);
console.log(person.age);
console.log(person.marks);
console.log(person.marks.science);
console.log(person["marks"]["science"]);

person.greet();
console.log(person.add(2, 3));
const { name, age, greet, add } = person;

console.log(name);
console.log(name);
greet();
console.log(add(5, 4));

// class StudentClass {
//   constructor(name, age, num1, num2) {
//     this.myName = name;
//     this.age = age;
//     this.num1 = num1;
//     this.num2 = num2;
//   }
//   get studentName() {
//     return this.myName;
//   }
//   set studentName(x) {
//     this.myName = x;
//   }
//   get studentAge() {
//     return this.age;
//   }
//   set studentAge(x1) {
//     this.age = x1;
//   }
//   greet() {
//     return "hello " + this.myName + " I'm " + this.age + " year old";
//   }
//   add() {
//     let total = this.num1 + this.num2;
//     return total;
//   }
// }

// let newStudent = new StudentClass("janet", 1, 2, 4);
// console.log(newStudent.studentName);
// console.log(newStudent.greet());
// newStudent.studentName = "busayo";
// newStudent.studentAge = 15;
// console.log(newStudent.greet());
// // console.log(newStudent.add());

class StudentClass {
  constructor(name, age, num1, num2) {
    this.myName = name;
    this.age = age;
    this.num1 = num1;
    this.num2 = num2;
  }
  get studentName() {
    return this.myName;
  }
  set studentName(x) {
    this.myName = x;
  }
  get studentAge() {
    return this.age;
  }
  set studentAge(x1) {
    this.age = x1;
  }
  greet() {
    return "hello " + this.myName + " I'm " + this.age + " year old";
  }
  add() {
    let total = this.num1 + this.num2;
    return total;
  }
}

class JavaScript extends StudentClass {
  constructor(name, age, num1, num2, subject) {
    super(name, age, num1, num2);
    this.myName = name;
    this.age = age;
    this.num1 = num1;
    this.num2 = num2;
    this.subject = subject;
  }
  time() {
    let today = new Date();
    let time = today.getHours() - this.num1;
    return time;
  }
}

let javascript = new JavaScript("janet", 12, 6, 34, "String type");
console.log(javascript.time());

let today = new Date();

console.log(today.getHours());
console.log(today.getFullYear() - 2001);

console.log(javascript.add());
console.log(javascript);

console.log(Math.ceil(Math.random() * 6));
console.log(Math.ceil(Math.random() * 6));
