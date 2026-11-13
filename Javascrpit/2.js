let words = ["apple", "ant", "banana", "ball", "cat", "car"];

let groupedWords = new Map();

for (let word of words) {

    let firstChar = word[0];

    if (!groupedWords.has(firstChar)) {
        groupedWords.set(firstChar, []);
    }

    groupedWords.get(firstChar).push(word);
}

for (let [key, value] of groupedWords) {
    console.log(key + ":", value);
}