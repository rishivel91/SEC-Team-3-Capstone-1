let num: number = 12345;
let temp: number = num;
let sum: number = 0;

while (temp > 0) {
    let digit: number = temp % 10;

    sum = sum + digit;

    temp = Math.floor(temp / 10);
}

console.log("Number:", num);
console.log("Sum of digits:", sum);