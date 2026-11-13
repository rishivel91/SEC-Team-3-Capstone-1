let numbers = [10, 5, 8, 2, 3];

numbers.sort(function(a, b) {
    return a - b;
});

console.log("Sorted Array:", numbers);
console.log("Second Smallest Element:", numbers[1]);