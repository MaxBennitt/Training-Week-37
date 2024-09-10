const DEBUGGING = {
    QUOTE: "Debugging is like being a detective in a crime drama where you are also the murderer",
}

for (let i = 0; i <= 100; i++) {
    output(DEBUGGING.QUOTE);
}

const BOTTLES_ON_SHELF_TEXT = " bottles of soda on the shelf";
const PASS_AROUND_TEXT = "Take one down, pass it around\n";
const NO_BOTTLES_LEFT_TEXT = "No more bottles of soda on the shelf";
const MAX = 99;
const EMPTY_LINE = "";
for (let index = MAX; index > 0; index--) {
    output(index + BOTTLES_ON_SHELF_TEXT);
    output(index + BOTTLES_ON_SHELF_TEXT);

    output(PASS_AROUND_TEXT + (index - 1) + BOTTLES_ON_SHELF_TEXT);
    output(EMPTY_LINE);
}

output(NO_BOTTLES_LEFT_TEXT);

const GRAVITY = 9.8;
const PI = 3.14;
let numberOfPeopleInARoom = 17;

output(GRAVITY)
output(PI)
output(numberOfPeopleInARoom)

function add(number1,number2) {
    return number1 + number2;
}

output("3 + 6 = " + add(3, 6));
output("5673 + 234 = " + add(5673, 234));

const people = ["Tony", "Christian", "Håkon"]

for (let index = people.length - 1; index >= 0; index--) {
    let person = people[index];
    output(person);
}

let phoneNumberList = [23091290, 32475347, 90872364, 43590289, 21329032];

let lastElement = phoneNumberList[phoneNumberList.length - 1];

output(lastElement);


let peopleNames = [["Christian", "Simonsen"], ["Tony", "Bergholtz"]]

for (let i = 0; i < peopleNames.length; i++){
    output(peopleNames[i][1]);
}

function output(content) {
    console.log(content)
}