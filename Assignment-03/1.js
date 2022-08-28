let n = 4;

let count = 1;

let string = "";

for (let i = 1; i <= n; i++) {

  for (let j = 0; j < i; j++) {
    string += (count + " ");

    count++;
  }
  string += "\n";

}

console.log(string);