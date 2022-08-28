/* section 1
let js = 'amazing'
console.log(40 + 8)

console.log('Jonas')
console.log(23)

let firstName = 'Justin'
console.log(firstName)
console.log(firstName)
console.log(firstName)
console.log(firstName)

let country = 'USA'
let continent = 'NA'
let population = 3000000

console.log(country, continent, population)

let age = 23
console.log(age)
let lastName = 'arch'


// section 2

let javascriptIsFun = true
console.log(javascriptIsFun)

// console.log(typeof true)
console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'justin')

javascriptIsFun = 'YES!'
console.log(javascriptIsFun)

let year
console.log(year)
console.log(typeof year)

year = 1991
console.log(year)
console.log(typeof year)

console.log(typeof null)

let age = 30
age = 31

const birthYear = 1991
birthYear = 1990


const job
var job = 'programmer'
job = teacher


// math opperators
const now = 2037
const ageJonas = now - 1998
const ageJustin = now - 2020
console.log(ageJonas, ageJustin)

console.log(ageJustin * 2, ageJustin / 10, 2 ** 3)
// 2 ** 3 -- means 2 to the power of 3 which means 8 = 2 * 2 * 2

const firstName = 'Justin'
const lastName = 'Arch'
console.log(firstName + ' ' + lastName)

//assignment opperatiors
let x = 10 + 5 // 15
x += 10 // x = x + 10 reassigning x thats why they use LET = result is 25
x *= 4 // this is x (line 73) * 4 = 100
x++ // x=x+1
x-- // x=x-1
console.log(x)

//comparison opperators (boolean)
console.log(ageJonas > ageJustin) // if jonas is older its true >,<, >=, <=
console.log(ageJustin >= 18)

const isFullAge = ageJustin >= 18

console.log(now - 1991 > now - 2018)


const now = 2037
const ageJonas = now - 1998
const ageJustin = now - 2020

let x, y
x = y = 25 - 10 - 5 //x = y = 10, x = 10
console.log(x, y)

const averageAge = (ageJonas + ageJustin) / 2
console.log(ageJonas, ageJustin, averageAge)


// test data 1 Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// formula BMI = mass / height ** 2 = mass / (height * height)
/*
const markWeight = 78
const markHeight = 1.69
const johnWeight = 92
const johnHeight = 1.95

let markBMI = markWeight / markHeight ** 2
let johnBMI = johnWeight / johnHeight ** 2

console.log('Mark"s BMI is ' + markBMI)
console.log('John"s BMI is ' + johnBMI)

let markHigherBMI = markBMI >= johnBMI

console.log('Does Mark have a higher BMI? ' + markHigherBMI)


// test data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

const markWeight = 95
const markHeight = 1.88
const johnWeight = 85
const johnHeight = 1.76

let markBMI = markWeight / markHeight ** 2
let johnBMI = johnWeight / johnHeight ** 2

console.log('Mark"s BMI is ' + markBMI)
console.log('John"s BMI is ' + johnBMI)

let markHigherBMI = markBMI >= johnBMI

console.log('Does Mark have a higher BMI? ' + markHigherBMI)


const firstName = 'Justin'
const job = 'Salesperson'
const birthYear = 1998
const year = 2098

const justin = "I'm " + firstName + ' , a ' + (year - birthYear) + ' year old ' + job
console.log(justin)

//template string using backticks, easier than above
const justinNew = `I'm ${justin}, a ${year - birthYear} year old ${job}`

//string with multiple lines with back slash
console.log(`String with \n\
multiple \n\
lines`)

console.log(`Backticks
dont
require new line breaks`)


// if else statements
const age = 18

//inside if needs to be boolean
if (age >= 18) {
    console.log(`Sarah can sart driving 🚗`)
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah can't drive 😭 Maybe in ${yearsLeft} years!`)
}

const birthYear = 1998
let century

if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century)


const markWeight = 95
const markHeight = 1.88
const johnWeight = 85
const johnHeight = 1.76

let markBMI = markWeight / markHeight ** 2
let johnBMI = johnWeight / johnHeight ** 2

if (markBMI >= johnBMI) {
    console.log(`Mark is fatter than John!`)
} else {
    console.log(`John is fatter than Mark!`)
}
if (markBMI >= johnBMI) {
    console.log(`Mark is ${markBMI} fatter than John! ${johnBMI}`)
} else {
    console.log(`John ${johnBMI} is fatter than Mark ${markBMI}!`
}


//valuetypes converting string to number
//Number() converts string to num when logging
//String() converts to string to num
//type conversion
const inputYear = '1991'
console.log(Number(inputYear) + 18)
console.log(Number('justin'))
console.log(String(23), 23)

//type coercion
console.log(`I am ${23} years old`)
console.log('23' + '10' - 3)
console.log('23' * '10')

//1+1 turns to be 11, then minus 1 = 10
let n = '1' + 1
n = n - 1
console.log(n)


//truthy and falsey values
//falsey arent false until you try to convert them
//5 falsey values 0, " ", undefined, null, NaN
//truthy, any number thats not 0

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Justin'))
console.log(Boolean({}))
console.log(Boolean(" "))

const money = 0
if (money) {
    console.log(`Don't spend it all!`)
} else {
    console.log(`You should get a job!`)
}

let height
if (height) {
    console.log(`Yay height is defined`)
} else {
    console.log(`Height is undefined`)
}


//Equality opperators
//=== is strict and doesnt coerce
//== is loose and coerces
//only use === to not get caught with bugs
const age = 18
if (age === 18) console.log(`You just became an adult`)

console.log(18 === 18)//true
console.log(18 === 19)//false (no conversion)
console.log(18 == '18')//true (loose)

//wrap prompt in a number to conver to #
const favorite = Number(prompt(`What's your favorite number?`))
console.log(favorite)

// wrap input in number to use the strict ====
// if else runs down boolean each step until else
if (favorite === 15) {
    console.log(`that is a great number`)
} else if (favorite === 11) {
    console.log(`that is a great number`)
} else if (favorite === 69) {
    console.log(`Nice 😎`)
} else {
    console.log(`that is a terrible number`)
}

if (favorite !== 15) console.log(`Why not 15?`)


//boolean logic AND, OR, NOT
//AND == A AND B need to be true, otherwise false &&

//OR == A OR B need to be true, otherwise false (if both are false) ||

//NOT == inverts true/false value (if A is true, it turns false)

// age = 16
// age is <= 20(false)
// Age is less than 30(true)
// !A = flips true
// A AND B = false
// A OR B = true
// !A AND B = true
// A or!B = false



//logical opperators

const hasDriversLicense = true // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)

const shouldDrive = hasDriversLicense && hasGoodVision

if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Someone else should drive`)
}

const isTired = false //C
console.log(hasDriversLicense && hasGoodVision && isTired)

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Someone else should drive`)
}


//Challenge 3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const Dolphins = (96 + 108 + 89 + 97 + 112 + 101 + 97 + 112 + 101) / 9
const Koalas = (88 + 91 + 110 + 109 + 95 + 123 + 109 + 95 + 123) / 9
const drawGame = Dolphins === Koalas

console.log(`The Dolphins averaged ${Dolphins}
The Koalas averaged ${Koalas}`)

if (Dolphins > Koalas) {
    console.log(`The Dolphins win`)
} else if (drawGame) {
    console.log(`It's a Draw!`)
} else {
    console.log(`The Koala's Win!`)
}

// // his try
const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3

if (scoreDolphins > scoreKoalas) {
    console.log(`The dolphins win`)
} else if (scoreKoalas > scoreDolphins) {
    console.log(`The Koalas win`)
} else if (scoreKoalas === scoreDolphins) {
    console.log(`It's a draw`)
}

//BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3
const scoreKoalas = (109 + 95 + 81) / 3

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`The Dolphins win`)
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log(`The Koalas win`)
} else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`It's a draw`)
} else {
    console.log(`No one wins the trophy`)
}


//Switch statement
const day = prompt('What Day is it?')

switch (day) {
    case 'monday':
        console.log(`Plan course structure`)
        console.log(`Go to coding meetup`)
        break
    case 'tuesday':
        console.log(`Prepare videos`)
        break
    case 'wednesday':
    case 'thursday':
        console.log(`Eat Dinner`)
        break
    case 'friday':
        console.log(`Go out`)
        break
    case 'saturday':
    case 'sunday':
        console.log(`Write in my journal`)
        break
    default:
        console.log(`not a valid day`)
}

if (day === 'monday') {
    console.log(`Plan course structure`)
    console.log(`Go to coding meetup`)
} else if (day === 'tuesday') {
    console.log(`Prepare videos`)
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Eat Dinner`)
} else if (day === 'friday') {
    console.log(`Go out`)
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Write in journal`)
} else {
    console.log(`not a valid day`)
}


//statements & expressions

3 + 4
1998
true && false && !false

if (23 > 10) {
    const str = 'large number'
} else {

}

const me = 'Justin'
console.log(`I'm ${2022 - 1998} years old. My name is ${me}`)



//conditional operator
//? starts if : starts else
//also called ternery opperator
//condition ? if : else
const age = 23
age >= 18 ? console.log(`I like to dink wine`) : console.log(`I like to dink water`)

//condensed
const drink = age >= 18 ? `wine` : `water`
console.log(drink)

//expanded
let drink2
if (age >= 23) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`)


// CHALLENGE 4
const billPrice = Number(prompt('How much is your bill?'))
const tipCalc = billPrice >= 50 && billPrice <= 300 ? billPrice * .15 : billPrice * .2

totalBill = billPrice + tipCalc
alert(`The bill was ${billPrice}, the tip was ${tipCalc}, the total bill was ${totalBill}! I hope you enjoyed your dinner!`)
*/

