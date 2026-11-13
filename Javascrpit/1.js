let words = ["apple", "ant", "banana", "ball", "cat", "car"];

let groupedWords = new Map();

for (let word of words) {

    let firstChar = word.charAt(0);

    if (groupedWords.has(firstChar)) {
        groupedWords.get(firstChar).push(word);
    } else {
        groupedWords.set(firstChar, [word]);
    }
}

console.log(groupedWords);