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