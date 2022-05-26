const path = require('path');
const fs = require('fs');

const input = path.join(__dirname, 'styles');
const output = path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(input, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      if (path.extname(file).match('.css')) {
        const stream = fs.createReadStream(path.resolve(input, file), 'utf-8');
        stream.on('data', (chunk) => {
          fs.appendFile(output, chunk, (err) => {
            if (err) {
              console.log(err);
            }
          });
        });
      }
    });
  }
});
fs.open(output, 'w', (err) => {
    if (err) console.log(err);
  });
