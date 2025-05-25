const fs = require('fs');
const path = require('path');

// Define your source file and target output file paths.
const sourceFilePath = 'source.txt';
const targetFilePath = 'target.txt';

// Read the source text from the specified file path.
fs.readFile(sourceFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading ${sourceFilePath}:`, err);
        return;
    }

    // Write the content of the source file to the target file with a specific format.
    fs.writeFile(targetFilePath, data, (err) => {
        if (err) {
            console.error(`Error writing to ${targetFilePath}:`, err);
        } else {
            console.log(`Successfully wrote "${sourceFilePath}" to "${targetFilePath}"`);
        }
    });
});
