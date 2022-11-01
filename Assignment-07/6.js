const countOccurrence = (string,word) => {
    return string.split(word).length  - 1
}

const string = "This is a string";
const word = "is"

console.log(countOccurrence(string,word))