let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", (name) => {
  rl.close();
  console.log(`Hello, ${name}!`);
});
