/*

    1. Write a JavaScript program to take an array as input from the user and calculate the sum of numbers in odd places and the sum of numbers at even places.
        a) Print the difference between the two sums
        b) Print the number of elements in odd places
        c) Print the number of elements in even places
        d) Print the average of all elements in the array
        e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
        Places

*/

function smartFunction(arr){

    let even = [];
    let odd = [];
    let sumOfArray = sumOfEven = sumOfOdd = gcd = 0;

    arr.forEach((element) => {
        sumOfArray += element;

        if(element % 2 === 0){
            sumOfEven += element;
            even.push(element)
        }else{
            sumOfOdd += element;
            odd.push(element)
        }
    })

    for(let i = 0;i <= sumOfEven && i <= sumOfOdd; i++){
        if(sumOfEven % i === 0 && sumOfOdd % i === 0){
            gcd = i;
        }
    }

    console.log(`Difference = ${sumOfOdd - sumOfEven}`)
    console.log(`Odd Elements = ${odd.length}`)
    console.log(`Even Elements = ${even.length}`)
    console.log(`Average = ${parseFloat(sumOfArray / arr.length)}`)
    console.log(`GCD = ${gcd}`)
}

smartFunction([1,2,3,4,5])