const number = 153;

let temp = parseInt(number)

let sum = 0;

while(temp !== 0){
    remainder = temp % 10;
    
    sum += (remainder**3);

    temp = Math.floor(temp / 10)
}

(sum === number) ? console.log("It is a armstrong number") : console.log("It isn't a armstrong number");
