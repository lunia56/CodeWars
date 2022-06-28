// You can print your name on a billboard ad. 
// Find out how much it will cost you. Each letter has a default price of £30, 
// but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 
// 20 leters * 30 = 600 (Space counts as a letter).




function billboard(name, price = 30) {
    let totalPrice = 0;
    for (let i = 0; i < name.length; i++) {
        totalPrice += price;
    }
    return totalPrice
}



// Your task is to make two functions 
// ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, 
// and return the largest and lowest number in that list, respectively.

let min = function (list) {
    list.sort((a, b) => a - b)
    return list[0];
}

let max = function (list) {
    list.sort((a, b) => b - a)
    return list[0];
}


// Complete the function that takes a non-negative integer n as input, and returns a list 
// of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
function powersOfTwo(n) {
    let degree = []
    for (let i = 0; i < n; i++) {
        degree.push(Math.pow(2, i))
    }
    return degree
}
console.log(powersOfTwo(5))



// Create a method to see whether the string is ALL CAPS.
String.prototype.isUpperCase = function () {
    return this == this.toUpperCase()
}




// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
    let square = numbers.reduce((sum, current) =>
        sum + current ** 2, 0)
    return square
}
console.log(squareSum([2, 2, 2]))



// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!


function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function () { return this.draft - (this.crew * 1.5) > 20 }
}
var titanic = new Ship(15, 10);
titanic.isWorthIt() // return false




// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


function fakeBin(x) {
    let myArray = Array.from(x)
    return myArray.map((item) => (Number(item) >= 5) ? 1 : 0).join("");
}

console.log(fakeBin("123445453498579387"))





// Вам даны два отсортированных массива, 
// оба из которых содержат только целые числа.
//  Ваша задача — найти способ объединить их в один, отсортированный по возрастанию. 
// Примечание: arr1 и arr2 могут быть отсортированы в разном порядке. 
// Также arr1 и arr2 могут иметь одинаковые целые числа.
//  Удалить дубликаты в возвращаемом результате.

function mergeArrays(arr1, arr2) {
    const newArray = [...new Set([].concat(arr1, arr2))].sort((a, b) => a - b)
    return newArray
}


// Игра камень ножницы бумага
// Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьей возврат Draw!.

const rps = (p1, p2) => {
    if (p1 == p2) { return "Draw!" }
    if (p1 == "scissors" && p2 == "paper" ||
        p1 == "paper" && p2 == "rock" ||
        p1 == "rock" && p2 == "scissors") {
        return "Player 1 won!"
    }
    else { return "Player 2 won!" }
};
console.log(rps('rock', 'scissors'))