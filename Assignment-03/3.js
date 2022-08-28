function factorial(number){
    let fact = 1;

    while(number !== 0){
        fact *= number;
        number--;
    }

    return fact;
}

let number = 145;

let temp = parseInt(number);

let sum = 0;

while(temp !== 0){
    sum += factorial(temp%10);
    temp = Math.floor(temp/10);
}

