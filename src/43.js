const fs = require('fs');
const readline = require('readline');

let input = '';

readline.open('./input.txt', (err) => {
  if (!err) {
    let lines = [];
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', data => {
      input += data;
    });
    process.stdin.on('end', () => {
      lines = JSON.parse(input);
      console.log(JSON.stringify(lines, null, '  '), readline.close());
    });
    process.stdin.resume();
  }
});
