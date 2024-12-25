import { rejects } from "assert";

let name: string = "Faizan";
const gender: string = "Male";
const age: number = 30;

name = "Hassam";
//name = 2 // cannot assing number to string
// gender = "male"; cannot change because of being constant

let isMarried: boolean = true;

isMarried = false;

const users: string[] = ["Faizan", "Hassam", "Ali"];
// const ages: Array<number> = [30, 23, 19]; Both are valid
const ages: number[] = [30, 23, 19];

const phones: Array<string | number | boolean> = ["7pro", "3a", 8, false];
phones.push("iphone12");

// const skills: Object = {      a simple object
//     "hassam": "asdas",
//     "faiza": "asd"
// }

const skills: Record<string, number | string> = {
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

const falsyArray: boolean[] = [true, true, true, true, false];

const hasFalse = falsyArray.every((item) => item);

// const sumAges = ages.reduce((acc, currentValue, index) => {
//   return acc + currentValue;
// }, 0);

const sumAges = ages.reduce(
  (acc, currentValue, index) => acc + currentValue,
  0
);

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

interface ILanguages {
  php: string;
  js: string;
  java: string;
  python: string;
}

const languages: ILanguages = {
  php: "Backend",
  js: "Frontend",
  python: "AI",
  java: "all",
};

type TAge = {
  name: string;
  age: number;
};

let agesArray: Array<ILanguages | TAge> = [
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

function someFunction(a: number, b: number): string {
  return `${a + b}`;
}

const mySurname = "Ul Haq";

const myPromise = (isFaizan: boolean) =>
  new Promise((resolve, reject) => {
    if (isFaizan) {
      setTimeout(() => resolve("Yes its faizan"), 1000);
    } else {
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
