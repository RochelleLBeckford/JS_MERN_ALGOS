/* 
Given an array of objects representing people, and
a string representing a bad habit, return a
"santasNaughtyList" containing the first and last
names of all the people who have the matching bad
habit so that santa knows how much coal he needs.
Bonus: after solving it, make a 2nd solution to practice
functional programming with built in methods.
*/


const students = [
    {
    firstName: "Kermit",
    lastName: "the Frog",
    habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
    ],
    },
    {
    firstName: "Miss",
    lastName: "Piggy",
    habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
    firstName: "Fozzie",
    lastName: "Bear",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
    firstName: "Gonzo",
    lastName: "the Great",
    habits: ["shows up early", "helps peers", "washes dishes"],
    },
];
    
    const badHabit1 = "doesn't wash dishes";
    const expected1 = ["Kermit the Frog", "Fozzie Bear"];
    
    const badHabit2 = "shows up late";
    const expected2 = ["Miss Piggy", "Fozzie Bear"];
    
    const badHabit3 = "vapes too much";
    const expected3 = [];
    
/** 
* Finds a list of people whose habits contain the given bad habit.
* - Time O(?).
* - Space O(?).
* @typedef {Object} Person
* @property {string} firstName
* @property {string} lastName
* @property {Array<string>} habits
* @param {Array<Person>} persons
* @param {string} badHabit
* @returns {Array<Person>} The people that have the given bad habit.
*/
// function santasNaughtyList(persons, badHabit) {
//     // your c
// }
// would  just be mapping through the array
/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */


//? One way 
function santasNaughtyList(persons, badHabit) {
    // your code
    const coalRecipients = [];
    
    for ( let i = 0; i < persons.length; i++) {
        const person = persons[i];

        for ( let j = 0; j < person.habits.length; i++) {
            const personsHabit = person.habits[j];

            if ( personsHabit === badHabit) {
                coalRecipients.push(`${person.firstName} ${person.lastName}`);
                // found what we are looking for, no need to keep looping
                break;
            }
        }
        console.log(person);
    }
    // console.log(coalRecipients);
    return coalRecipients;
};

const santasNaughtyListFunctional = (persons, badHabit) => persons
    .filter((person) => person.habits.includes(badHabit))
    .map((person) => `${person.firstName} ${person.lastName}`);

console.log(santasNaughtyListFunctional(students, badHabit1));
console.log(santasNaughtyListFunctional(students, badHabit2));
console.log(santasNaughtyListFunctional(students, badHabit3));




//? Another way 
function santasNaughtyListFunctional(persons, badHabit) {
//     //? 2nd way -> to clean up the code 
    return persons.filter(person => person.habits.includes(badHabit)).map(person => person.firstName + ' ' + person.lastName);
};

console.log(santasNaughtyListFunctional(students, badHabit1));
console.log(santasNaughtyListFunctional(students, badHabit2));
console.log(santasNaughtyListFunctional(students, badHabit3));



// filter that ++ through objects
// if it find whatever we set as condition it will return entire object
// persons.filter -> go through stundent list 
// everys inglt index is going to be person -> what each entry will be known by
// one liner 
//     -> easch person look for the key of habits
//     go to .habits - run function .includes - fins wwqht we are looking for return true
//     once finds it allbecomes truy - added to the filter
//     chaining to the map and show it how we want it to be displayed
//     usually do returns for what your looking for once do the 
//     once solve it and get it working and look through everything and see how can make it cleaner and not take up soo much space
