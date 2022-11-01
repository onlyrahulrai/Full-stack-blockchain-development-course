const truncateString = (str) => {
    if(str.length > 4){
        return `${str.substr(0,4)}...`
    }
    return str
}

// const str = "Ice"
const str = "Icecream"
console.log(truncateString(str))