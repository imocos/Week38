/*
    Hello.
    This is a problem set for you to work on
    The idea is to practice a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change the provided code unless the task specifically says you should.
*/

/*
    Task: Example
    Write the code to print all the names in the list, one name per line.
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/*
    Task: A
    Create variables for:
    * Hours in a day
    * Minutes in an hour
    * Seconds in a minute
    * The ratio between water and juice when mixing juice
    * Days until your birthday
    * Millimeters of rain that falls
*/
console.log("Task: A");

const HOUR_PER_DAY = 24;
const MIN_PER_HOUR = 60;
const SEC_PER_MIN = 60;
const juiceRatioToWater = 0;
let daysUntilBirthday = 54;
let mmRainFallen = 120;




/*
    Task: B
    Use your variables (do not redefine them) from task A and calculate:
    * How many seconds are in 2.5 hours?
    * How many minutes are in 123 days?
    Remember to assign the answers to their own variables.
    Example:
    // How many deciliters are in 4.5 cups?
    const dlInCups = 2.36588;
    const amountOfDL = dlInCups * 4.5;
*/
console.log("Task: B");

const SEC_IN_TWO_AND_A_HALF_HOURS = SEC_PER_MIN * MIN_PER_HOUR * 2.5;
console.log("How many seconds are in 2.5 hours? " + SEC_IN_TWO_AND_A_HALF_HOURS);
const MINUTES_IN_ONE_HUNDRED_AND_TWENTY_THREE_DAYS = MIN_PER_HOUR * HOUR_PER_DAY * 123;
console.log("How many minutes are in 123 days? " + MINUTES_IN_ONE_HUNDRED_AND_TWENTY_THREE_DAYS);


/*
    Task: C
    Use a loop (for) to print the numbers from 1 to 10.
*/
console.log("Task: C");

const numbers_to_ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

for (let index = 0; index < numbers_to_ten.length; index++) {
    console.log(numbers_to_ten[index]);
}

/*
    Task: D
    Use a loop (for) to print the numbers from 10 to 1.
*/
console.log("Task: D");

const reversed_numbers_to_ten = numbers_to_ten.reverse();

for (let index = 0; index < reversed_numbers_to_ten.length; index++) {
    console.log(reversed_numbers_to_ten[index]);
}

/*
    Task: E
    This one is a bit more difficult, but you can do it ;)
    Use a loop (for) to print the even numbers between 1 and 100.
*/
console.log("Task: E");

for (index = 1; index <= 100; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}

/*
    Task: F
    Use a while loop to print all the numbers from 0 to 100;
*/
console.log("Task: F");

let n = 1;
while (n <= 100) {
    console.log(n);
    n++;
}


/*
    Task: G
    Fill in the code needed to make the following code print the expected result.
*/
console.log("Task: G");

const DICTIONARY = {
    no: {
        
    },
    en: {
        hello: "Hi ",
        howAreYou: "How are you? ",
        goodQuestionsLately: "Gotten any good questions lately? "
    }
};

console.log(`${DICTIONARY.en.hello} Christian ${DICTIONARY.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY.en.goodQuestionsLately}`); //-> Gotten any good questions lately?