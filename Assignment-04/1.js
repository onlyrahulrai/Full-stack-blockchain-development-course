const matchHouse = (n) => {
    if(n === 0){
        return "Step 0 returns 0 matchsticks."
    }else if(n < 0 || typeof n !== "number"){
        return "The input (step) will always be a non-negative integer."
    }else {
        let a = (5 * n) + 1;
        return a;
    }
}


console.log(matchHouse(1));
console.log(matchHouse(4));
console.log(matchHouse(87));