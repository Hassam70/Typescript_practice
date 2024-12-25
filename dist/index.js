"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Faizan";
const gender = "Male";
const age = 30;
name = "Hassam";
//name = 2 // cannot assing number to string
// gender = "male"; cannot change because of being constant
let isMarried = true;
isMarried = false;
const users = ["Faizan", "Hassam", "Ali"];
// const ages: Array<number> = [30, 23, 19]; Both are valid
const ages = [30, 23, 19];
const phones = ["7pro", "3a", 8, false];
phones.push("iphone12");
// const skills: Object = {      a simple object
//     "hassam": "asdas",
//     "faiza": "asd"
// }
const skills = {
    hassam: "hassam",
};
// Normal for loop
// for (let i = 0; i < phones.length; i++) {
//   console.log(phones[i]);
// }
const foraeach = phones.forEach((item, index) => {
    //   console.log(item);
});
const map = phones.map((item, index) => {
    return `${item} ${index}`;
});
const falsyArray = [true, true, true, true, false];
const hasFalse = falsyArray.every((item) => item);
// const sumAges = ages.reduce((acc, currentValue, index) => {
//   return acc + currentValue;
// }, 0);
const sumAges = ages.reduce((acc, currentValue, index) => acc + currentValue, 0);
// const hashassam = users.includes("Hassam");
// if (hashassam) {
//   console.log("Yes hassam is in the array");
// } else {
//   console.log("No hassam is not in the array");
// }
const hasHassam = users.includes("Hassam") ? "Has Hassam" : "Hassam not found";
// condition ? if : else
let alooo = 10;
const isUndefined = alooo ?? "Ye undefined hai";
const isNull = alooo ?? "ye null hai";
const isAllo = alooo || "Ye b 1 tariqa hai";
const languages = {
    php: "Backend",
    js: "Frontend",
    python: "AI",
    java: "all",
};
let agesArray = [
    {
        name: "Faizan",
        age: 30,
    },
    {
        name: "Hassam",
        age: 23,
    },
    {
        name: "Ali",
        age: 19,
    },
];
function someFunction(a, b) {
    return `${a + b}`;
}
const mySurname = "Ul Haq";
const myPromise = (isFaizan) => new Promise((resolve, reject) => {
    if (isFaizan) {
        setTimeout(() => resolve("Yes its faizan"), 1000);
    }
    else {
        reject("This is not faizan");
    }
});
// function handlingPromiseOldWay() {
//   myPromise(false)
//     .then(() => console.log("Promise is good and resolved"))
//     .catch((e) => console.error(e));
// }
// handlingPromiseOldWay();
async function handlingPromse() {
    const isFaizan = await myPromise(true);
    console.log(isFaizan);
}
handlingPromse();
