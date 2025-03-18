const fs = require('fs');

fs.readFile("./input.txt", 'utf8', (err, data) => {
    if(err) {
        console.log("Error reading file.");
        return;
    }

    const lines = data.split('\n');
    const numbers = [];

    for(const line of lines) {
        const number = parseInt(line, 10);
        if(!isNaN(number)) {
            numbers.push(number);
        }
    }

    console.log("The sum is: " + numbers.reduce((a, b) => a + b));
});
