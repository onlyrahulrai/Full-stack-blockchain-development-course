const string = "strinG Method";

// Option 1 - String converted to Upper Case
console.log(string.toUpperCase())

// Option 2 - Captalizing the text with the help of (charAt,toUpperCase and slice) Method 
console.log(string.charAt(0).toUpperCase() + string.slice(1))

// Option 3 - Converting the text into lowercase
console.log(string.toLowerCase())

// Option 4 - Breaking the string into two halves and swaping them.
console.log(string.split(" ").reverse().join(" "))

// Option 5 - Count the repeating characters.
const object = Object.create(null);

for(let char of string.replace(" ","")){
    if(char in object){
        object[char] += 1
    }else{
        object[char] = 1
    }
}

console.log(object)



// Option 6 - Reverse a string
console.log(string.split("").reverse().join(""))



