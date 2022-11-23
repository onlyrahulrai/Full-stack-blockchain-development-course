/*
    Question 4. Write a JavaScript program to take an array as input from the user and:
        a) Store all duplicate elements in a separate array
        b) Remove the duplicate elements from the original array
*/

function smartFunction(array) {
  let duplicate = [];
  let result = [];

  array.forEach((element) => {
    result.includes(element) ? duplicate.push(element) : result.push(element);
  });

  console.log(`Duplicate Elements = [${duplicate}]`);
  console.log(`Array without duplicate elements = [${result}]`);
}

smartFunction([1, 2, 3, 2, 3, 4, 5]);
