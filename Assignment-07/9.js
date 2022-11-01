// We can use toLowerCase method for the argument that is passing when function call and compare it with "yes" string.

const isValidStr = (str) => str.toLowerCase() === "yes"

console.log(isValidStr("yES"))