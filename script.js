// This is a single line comment

/* 
this is a multi-line comment
firstly press / then shift *
*/

/* 
    ways of declaring/calling a variable
    1. var (outdated)
    it allows to declare, redeclare and initialize and reassign

    2. let:
     Declare, initialize and reassign

    3. const: Declare and constant values
*/

/* 
    Variable naming rules

        1. The variable name should be related to value
            e.g Let myName = "Itunu"; Let myAge = "19"

        2. Don't redeclare a variable using let or const.

        3. When using a multiple word variable, use your Camelcase, pascalcase or snakecase
            e.g
             // Camelcase
            let myName = "itunu"
            let myAge = "15"
                note: only the first word will be in a lower case while the first letter in the following word
                        will be in capital letter/upper case

            // Pascalcase
            let Favoritecolor = "blue"
            let MyFavoriteLocation = "barracks"
                note: Every letter that start each word will be in capital letter/uppercase

            // Snake_case
            let favorite_color = "green"
            let my_favorite_location = "barracks"
                note: 

        4. Variable name can't be a reserved/key word

        5. 


    Values - Datatypes
        1. Primitive Datatypes
            a. number= let a = 2
            b. string= usually in a ""/'
            c. boolen= without '/""
            d. undefined= e.g let myCar;
            e. null= e.g let myUsername = null;   console.log (typeof(myUsername));
            f. symbol
            g. BigInt
        

        2. Non-primitive Datatypes or complex or reference-type data
            a. Array= represented by [], allows to store multiple records
            b. object= represented by {}
            c. function=
            d. Date 

            ass
            Create an array of object in your company including their name, dpt, salary scale
*/

let favoriteNumber = "26"
console.log(typeof(favoriteNumber));

let personName = `iTuNu`
console.log(personName)

let correctedName = personName.charAt(0).toLowerCase


let firstNumber = 25;
let secondNumber = 25;

// Additional operator
let results = firstNumber + secondNumber;

console .log(results);

// Multiplication operator
results = firstNumber * secondNumber;
console .log(results);

// Subtraction operator
results = firstNumber - secondNumber;
console.log(results);

// Exponential operation
results = firstNumber ** 6;
console .log(results);

// Modulus operator
results = firstNumber % 15;
console .log (results)

/*
     Simple Assignment operator
*/
let myFistName = "General";
console .log (myFistName);

// Add and Assign operator

let thirdNumber = 15;
thirdNumber += 5;
console.log(thirdNumber);

myFistName += "Itunes";
console.log(myFistName);

// Subtract and assign operator
thirdNumber -= 5;
console.log(thirdNumber);

// multiply and assign
thirdNumber *= 2;
console.log(thirdNumber);

// Divide and assign operator
thirdNumber /= 3;
console.log(thirdNumber);


/* 
    Array and Array Method
        1. Length
        2. index
        3. pop(): removes the last element in the array
        4. push(): use to add element to the last element in the array
        5. shift(): removes from the beginning of the array
        6. Includes
        7. Concat
*/

const fruits = ["Apple", "Banana", "Cashew", "Date", "Eggplant", "Fig", "Grapes"];

// Length
console .log (fruits[fruits.length - 1]);

// indexof()

// concat
const firstBatch = ["Ade", "Bobo", "Cate", "Deola"];
const secondBatch = ["Eniola", "Faith", "Gabriel"];

const concatBatch = []


const registeredUsers = ["john_doe", "mary123", "developer01", "sandra"];
const pendingUsers = ["newbie", "guest_user"];
const username = "guest_user"
const isAvailable = "itunes"

const allusers = (isAvailable.concat(pendingUsers));

/* 
     Loops
        Types of loop
            * For loop
            * While looop
*/


const students = [
    {Name: "Daniel", Math: 75, English: 80, Computerscience: 75},
    {Name: "Emmanuel", Math: 75, English: 80, Computerscience: 80},
    {Name: "Dayo",  Math: 80, English: 70, Computerscience: 90},
    {Name: "Tayo", Math: 50, English: 70, Computerscience: 70},
    {Name:"Bisola", Math: 65, English: 70, Computerscience: 80},
    {Name: "Ahmed", Math: 55, English: 65, Computerscience: 70}
]
let averageScore = 0;
let accumulator = 0;

for (let score of students){
    console.log(`Student Name: ${score.Name}, Math ${score.Math}, English ${score.English}, Computerscience ${score.Computerscience}`)
    
    let aggregateScore = score.Math + score.English + score.Computerscience
    averageScore = parseInt(aggregateScore/3)
    console.log(`Student Name: ${score.Name}, Aggregate Score: ${aggregateScore}, Average Score: ${averageScore}`)

    accumulator += averageScore

    if (averageScore > 70 && averageScore < 101){
    console.log(`Distinction`)
 }

 if (averageScore < 49 && averageScore < 70)
    console.log(`credit`)

 if (averageScore < 1 && averageScore < 40)
    console.log(`pass`)
};

myOtherName = "itunoluwa";
myOtherName.length;
console.log(myOtherName.length -7 );
// console.log(myOtherName[myOtherName.length [5]])

const classAverage = accumulator / students.length
console.log(`Class Average is ${classAverage}`);

const summary = [ "Name: Daniel, Aggragate Score [230]", `Name: "Emmanuel", "Aggregate Score [235]"`, `Name: "Dayo", "Aggregate Score[240]"`
]
console.log(summary)
 
 
// for (let i = 1; i < 100; i++){
//     if ( i % 7 ===);
//         console.log(`${i} is a multiple of 7`);
// }

let myNumber = [ "08038039335", "9139023177", "8022327858", "8158858585", "333333333"]
console.log(myNumber)
console.log(myNumber[2])

// Array Method

// Length method
console.log(myNumber.length)
// to get the last element of an array
console.log(myNumber[myNumber.length -1])

// POP () Method: it remove the last element in the array
myNumber.pop()
console.log(myNumber)

// Push () Method: it adds an element to the end of an array
myNumber.push("lokoga", "Kwara", "Lagos");
console.log(myNumber)

// Shift () Method: it removes the first elemet in the array, i.e element at position zero 0
myNumber.shift();
console.log(myNumber)

// Unshift () Method: it adds an element to the first/starting of an array
myNumber.unshift("state and capital")
console.log(myNumber)

// Slice () Method


const dataFetching = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        const users = data.map((user) => {
            return user.username;
        })

        console.log(users);
    } catch(error){

    }
}

dataFetching();