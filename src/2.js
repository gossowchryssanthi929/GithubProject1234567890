// Get a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Use the random number to generate a random nodejs code
const randomNodejsCode = `
console.log("Hello, world!");
console.log("I'm a nodejs program.");
console.log("My random number is:", getRandomNumber());
`;

return randomNodejsCode;
