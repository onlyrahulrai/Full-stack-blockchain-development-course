const num = 5;
let temp = parseInt(num);
let fact = 1;

while(temp !== 0){
    fact *= temp;
    temp--;
}

console.log(`Factorial of ${num} is ${fact}`);