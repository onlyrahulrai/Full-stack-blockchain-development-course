function isPrime(number){
    let flag = true;

    for(let j = 2;j<number;j++){
        if(number%j === 0){
            flag = false;
            break;
        }
    }

    return flag;
}

function factorial(start,end){
    let fact = 1;

    for(let i=start;i<end;i++){
        
        if(isPrime(i)){
            fact *= i;
        }

    }

    return fact;
}

console.log(factorial(1,5));