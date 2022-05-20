const fs = require('fs');
const path = require('path');
const process = require('process');
process.stdin.resume();
const readline = require('readline');
const { stdin: input, stdout: output, exit } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Hi! What do you think of Node.js?', (answer) => {
    });
rl.on("SIGINT", function () {
    console.log('Thank you, buy');
    process.emit("SIGINT");
    process.exit();
  });

const outputTxt = fs.createWriteStream(path.join(__dirname, 'text.txt'));

process.stdin.on('data', chunk => outputTxt.write(chunk));
process.stdin.on('error', error => console.log('Error', error.message));
