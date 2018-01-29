/////////////////////////////////////////////
/////////// PRIMITIVE DATA TYPES ////////////
/////////////////////////////////////////////

// STRING
let name = 'Moses';

// NUMBER
let old = 100;

// BOOLEAN
let isAlive = false;

// UNDEFINED
let someValue = undefined;

// NULL
let otherValue = null;

/////////////////////////////////////////////
//////////////// OPERATORS //////////////////
/////////////////////////////////////////////

/*
*    () -> PARENTHESES
*
*    * -> MULTIPLICATION
*
*    / -> DIVISION
*
*    % -> REMAINDER
*
*    + -> ADDITION
*
*    - -> SUBTRACTION
*
* */


/////////////////////////////////////////////
/////////// COMPARISON OPERATORS ////////////
/////////////////////////////////////////////

/*
*
*    == -> EQUALS (VALUE)
*
*    === -> EQUALS (TYPE AND VALUE)
*
*    != -> NOT EQUALS (VALUE)
*
*    !== -> NOT EQUALS (TYPE AND VALUE)
*
*    < -> SMALLER THAN
*
*    > -> BIGGER THAN
*
*    <= -> SMALLER THAN OR EQUAL TO
*
*    >= -> BIGGER THAN OR EQUAL TO
*
* */

/////////////////////////////////////////////
////////////// BOOLEAN LOGIC ////////////////
/////////////////////////////////////////////

/*
*
*       && -> AND
*
*       || -> OR
*
*       ! -> NOT
*
* */

/////////////////////////////////////////////
////////////// IF ELSE STATEMENT ////////////
/////////////////////////////////////////////

let ageLimit = 18;

if (ageLimit >= 18) {
    console.log('You may enter');
} else if (ageLimit < 18) {
    console.log('Sorry, you are too young');
} else {
    console.log('error!');
}

/////////////////////////////////////////////
////////////// SWITCH STATEMENT /////////////
/////////////////////////////////////////////

let trafficLight = 'green';


switch (trafficLight) {
    case 'red':
        console.log('stop');
        break;
    case 'yellow':
        console.log('yeld');
        break;
    case 'green':
        console.log('go');
        break;
    default:
        console.log('error');
}

/////////////////////////////////////////////
//////////// CODING CHALLENGE 1 /////////////
/////////////////////////////////////////////


// PERSON 1
let height1 = 60;

let age1 = 18;

let score1 = height1 + (age1 * 5);

// PERSON 2
let height2 = 45;

let age2 = 12;

let score2 = height2 + (age2 * 5);

// CALCULATE VALUES

let result;

let finalScore;

if (score1 > score2) {

    result = score1;

    console.log('Congratulations player one! You won with a score of ' + result);
} else if (score2 > score1) {

    result = score2

    console.log('Congratulations player two! You won with a score of ' + result);
} else {
    console.log("It's a tie!");
}

/////////////////////////////////////////////
///////////////// FUNCTIONS /////////////////
/////////////////////////////////////////////


// FUNCTION STATEMENT -> PERFORMS ACTION
function addNumbers(x, y) {

    return x + y;
}

// FUNCTION EXPRESSION -> PRODUCES VALUE
let subtractNumbers = function (x, y) {

    return x - y;
};

/////////////////////////////////////////////
////////////////// ARRAYS ///////////////////
/////////////////////////////////////////////

let names = ['Jena', 'Andy', 'Billy'];

let years = new Array(1992, 1993, 1994);

/////////////////////////////////////////////
///////// OBJECTS AND PROPERTIES ////////////
/////////////////////////////////////////////

// OBJECT LITERAL
let person = {

    // PROPERTIES
    name: 'Gabriella',
    lastName: 'Martins',
    age: 25,
    isStudent: true,
    greeting: 'Hello',
    skills: ['Java', 'Ruby', 'Python'],

    //METHODS.
    getBirthday: function () {
        console.log('July 18th 1992');
    },
    getFullName: function () {
        console.log(`${this.name} ${this.lastName}`);
    },
    calculateRetirement: function () {
        this.retire = 65 - this.age;
        console.log(`${this.name} will retire in ${this.retire} years`);
    }
};

// ACCESSING PROPERTIES IN OBJECTS

// DOT NOTATION
person.age;

// BRACKETS NOTATION
person['name'];

let older = 20;

// CHANGING PROPERTY KEY
person.age = older;

person['lastName'] = 'Alvarez';

// CHANGING PROPERTY KEY
let isMarried = 'isStudent';

// INSTANTIATION NEW OBJECT
let User = new Object();

// ASSIGNING PROPERTIES TO NEW OBJECT
User.name = 'Anderson';
User.age = 25;
User.isStudent = false;
User['birthday'] = 1992;
User['job'] = 'programmer';

person.getBirthday();

person.getFullName();

person.calculateRetirement();

/////////////////////////////////////////////
/////////// LOOPS AND ITERATION /////////////
/////////////////////////////////////////////

// FOR LOOP
for (let i = 0; i < person.skills.length; i++) {
    console.log(`I'm proficient in ${person.skills[i]}`);
}

//REVERSE FOR LOOP
for (let i = person.skills.length - 1; i >= 0; i--) {
    console.log('counting backwards ' + i);
}

// WHILE LOOP
let counter = 0;
while (counter < person.skills.length) {
    console.log(`I know ${person.skills[counter]}`);
    counter++;
}

// BREAK STATEMENT
for (let i = 0; i < 5; i++) {
    console.log(i);

    if (i === 3) {
        console.log('time to break');
        break;
    }
}

// CONTINUE STATEMENT
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        console.log('skip number ' + i);
        continue;
    }
    console.log(i);
}

/////////////////////////////////////////////
//////////// CODING CHALLENGE 2 /////////////
/////////////////////////////////////////////

let birthDates = [1992, 1984, 1948, 1993, 2007, 2013, 2017];

let empty = [];

for (let i = 0; i < birthDates.length; i++) {
    empty.push(birthDates[i]);

    let age = 2018 - empty[i];

    if (age < 18) {
        console.log(`The individual born in ${empty[i]} is over 18 years of age`);
    } else {
        console.log(`The individual born in ${empty[i]} is not over 18 years of age`);
    }
}

function isOfAge(listOfAges) {

    let isOfAgeList = [];

    let isOfAge;

    for (let i = 0; i < listOfAges.length; i++) {

        if (2018 - listOfAges[i] >= 18) {
            isOfAge = true;

            isOfAgeList.push(isOfAge);
        } else {
            isOfAge = false;

            isOfAgeList.push(isOfAge);
        }
    }
        return isOfAgeList;
}


console.log(isOfAge(birthDates));

/////////////////////////////////////////////
/////////////////// ES 6 ////////////////////
/////////////////////////////////////////////


// THE THIS KEYWORD WILL AWAYS POINT TO THE OBJECT BEING REFERENCED. THEREFORE, THIS IS DEPENDENT ON CIRCUMSTANCE

// TYPE COERCION IS WHEN DIFFERENT TYPE VARIABLES ARE CONVERTED TO A STRING TYPE VARIABLE.

// JS IS A NON-STATIC TYPE LANGUAGE. THEREFORE, VARIABLE CAN HAVE DIFFERENT TYPES.

















