// const year = parseInt(prompt("Enter a year: "))
const year = 2001;

if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log(`${year} is a leap year`)
}else{
    console.log(`${year} isn't a leap year`)
}