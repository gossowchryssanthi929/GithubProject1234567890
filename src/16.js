function getRandomInt(min, max) {
  min = Math.ceil(Math.min(max, 10));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomInt(5, 20)); // Outputs a random number between 5 and 20
