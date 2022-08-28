//strict mode
'use strict'
/*
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log(`I can drive`)


//functions
function logger() {
    console.log(`My name is Justin`)
}

//calling / running / invoking function
logger()
//calling
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}
//storing
const appleOrangeJuice = fruitProcessor(2, 4)
//returning
console.log(appleOrangeJuice)


//function declaration -- can call previously in code
function calcAge1(birthYear) {
    return 2048 - birthYear
}

const age1 = calcAge1(1998)

//function expression -- just a value -- anonymous function
const calcAge2 = function (birthYear) {
    return 2048 - birthYear
}

const age2 = calcAge2(1998)
console.log(age1, age2)


//arrow function section
const calcAge2 = function (birthYear) {
    return 2048 - birthYear
}

//arrow function -- special form, value assigned to a variable -- much faster and easier to write
const calcAge3 = birthYear => 2048 - birthYear
const age3 = calcAge3(1998)
console.log(age3)

//if more than one line need curly braces and return
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2048 - birthYear
    const retirement = 65 - age
    //return retirement
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1998, 'Justin'))
console.log(yearsUntilRetirement(1990, 'Susan'))



//call functions calling other functions
function cutPieces(fruit) {
    return fruit * 10
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice
}

const cutFruitJuice = fruitProcessor(2, 3) //storing the result of function
console.log(cutFruitJuice) //calling the functions


//reviewing funtions
const calcAge = function (birthYear) {
    return 2048 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement
    } else {
        console.log(`${firstName} has already retired`)
        return -1
    }
}

console.log(yearsUntilRetirement(1998, 'Justin'))
console.log(yearsUntilRetirement(1950, 'Mike'))


// // Coding Challenge 1
// Dolphins
// Koalas
// 3 tries then average for 1 score
// Only wins if they double

//my attempt
const calcAverageDolph = dolphScores => (dolphScores + dolphScores + dolphScores) / 3
const calcAverageKoala = koalaScores => (koalaScores + koalaScores + koalaScores) / 3

const dolphAvg = calcAverageDolph(44, 23, 71)
const koalaAvg = calcAverageKoala(65, 54, 49)

console.log(dolphAvg, koalaAvg)

function checkWinner(dolphAvg, koalaAvg) {
    if (dolphAvg >= 10 && dolphAvg > koalaAvg) {
        console.log(`Dolphins win!`)
    } else if ((koalaAvg >= 10 && dolphAvg < koalaAvg)) {
        console.log(`Koalas Win!`)
    } else {
        console.log(`something went wrong`)
    }
    return checkWinner
}

const winnerTotal = checkWinner(dolphAvg, koalaAvg)
console.log(winnerTotal)

//his attempt
const calcAverage = (a, b, c) => (a + b + c) / 3

let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win!`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win!!`)
    } else {
        console.log(`no one wins`)
    }
}

checkWinner(scoreDolphins, scoreKoalas)

checkWinner(576, 111)

scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)
console.log(scoreDolphins, scoreKoalas)
checkWinner(scoreDolphins, scoreKoalas)



//arrays
const friend1 = 'Micheal'
const friend2 = 'Peter'
const friend3 = 'Justin'

const friends = ['Micheal', 'Peter', 'Justin']
console.log(friends)

const y = new Array(1998, 1962, 2020, 2017)

console.log(friends[0], y[0])
console.log(friends[2], y[1])
console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

const firstName = 'Justin'
const justin = [firstName, 'Arrichiello', 2022 - 1998, 'student', friends]
console.log(justin)

const calcAge = function (birthYear) {
    return 2048 - birthYear
}

const years = [1990, 1987, 1999, 1991, 1976]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length[-1]])
console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length[-1]])]
console.log(ages)
*/