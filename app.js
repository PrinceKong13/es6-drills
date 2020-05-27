let favMovie = (movie = "The Room", name = "World") =>
  console.log(`Hello, my name is ${name} and my favorite movie is ${movie}`);

let getFullName = (fullName) => {
  const name = fullName.split(" ");
  console.log(name[0]);
};

let getFullNameConcise = (fullName) => fullName.split(" ")[0];


favMovie();
favMovie("Mad Max", "Will");

console.log(getFullNameConcise("Will Kirkpatrick"));
getFullName("Will Kirkpatrick");

let makeObject = (x, y) => {
    let object = {
        exponent: Math.pow(x, y),
        product: x*y
    }
    return object;
}

let myObject = makeObject(2, 3);
console.log(`exponent ${myObject.exponent}`);
console.log(`the product is ${myObject.product}`);

let logList = (name, location, favFood) => {
    console.log(name);
    console.log(location);
    console.log(favFood);
};

let array = ["Will", "Birmingham", "Sesame Chicken"];

logList(...array);

let myName = "Will";

function myFunc(word) {
    let stringArray = [...word];
    for (let i = 0; i < stringArray.length; i++) {
        console.log(stringArray[i]);
    }
}

myFunc(myName);
