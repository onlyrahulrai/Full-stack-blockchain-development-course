/*
    Question 2. Write a JavaScript program to take 2 arrays from the user and check if the number 4 exists in any of the arrays, or both of the arrays.
*/

function checkElementFromArray(arr1,arr2){
    if(arr1.includes(4) && arr2.includes(4)){
        return "4 in both arrays";
    }else if(arr2.includes(4)){
        return "4 in array 2";
    }else if(arr1.includes(4)){
        return "4 in array 1";
    }else{
        return "4 isn't present in any array";
    }
}

console.log(checkElementFromArray([ 1, 2, 3, 4, 5 ],[ 4, 6, 1, 8, 2 ]))
// console.log(checkElementFromArray([ 1, 2, 3, 6, 5 ],[ 4, 6, 1, 8, 2 ]))
// console.log(checkElementFromArray([ 1, 2, 3, 4, 5 ],[ 5, 6, 1, 8, 2 ]))