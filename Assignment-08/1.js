/* 
    Question-1: Can we put duplicate values in the set object ?
    Answer: We can't put duplicate values inside the set because A Set is a collection of unique values.Each value can only occur once in a Set. That's why set is not allow us to add duplicate value.
*/



// Question-2: Write the syntax for ? 

    // Creating new set object
    const firstSet = new Set([1,2,3]);

    // Adding new element to set object
    firstSet.add(4)

    // Deleting element from set object
    firstSet.delete(1)



// Question-3: Create a set object with four random numbers from 0 to 10.

const secondSet = new Set()

for(let i=0; i<4; i++){
    const value = Math.floor(Math.random(1,10) * 10);
    secondSet.add(value)
}

if(secondSet.has(8)){
    console.log("\nValue is Exists")
}else{
    console.log("\nValue isn't Exists")
}
