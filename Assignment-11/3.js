/*
    Question 3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain array.            
        Note: Do not use array.flat();
*/

function flattendAnArray(arr) {
  const stack = [...arr];
  const res = [];

  while (stack.length) {
    const next = stack.shift();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }

  return res;
}

console.log(flattendAnArray([1, 2, [3, 4, [5, 6]]]));
