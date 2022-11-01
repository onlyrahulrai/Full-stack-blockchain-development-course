// We are using split method to convert string to an Array

const string = 'word';


// Option 1
const usingSplit = string.split('');

// Option 2
const usingSpread = [...string];

// Option 3
const usingArrayFrom = Array.from(string);

// Option 4
const usingObjectAssign = Object.assign([], string);

