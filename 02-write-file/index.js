const fs = require('fs');
const path = require('path');
const process = require('process');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
const { stdin, stdout} = process;
console.log('Hi! What do you think of Node.js?');

const outputTxt = fs.createWriteStream(path.join(__dirname, 'text.txt'));

process.stdin.on('data', chunk => { 
        const str = chunk.toString(); 
    if (str.toLowerCase().trim() === 'exit') {
        stdout.write('Thank you, buy \n');
        process.exit(); 
    }
    else{
        outputTxt.write(chunk)
    }
});
process.stdin.on('error', error => console.log('Error', error.message));
process.on('SIGINT', () => {
    stdout.write('Thank you, buy \n');
    process.exit();
  });
