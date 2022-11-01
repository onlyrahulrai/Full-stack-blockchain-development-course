const removeWhitespace = (str) => {
    return str.replace(/\s/g,"")
}

const str = "Hii Boy"
// const str = "program to check the number of occurrence of a character"
console.log(removeWhitespace(str))