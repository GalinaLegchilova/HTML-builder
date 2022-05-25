const path = require('path');
const fs = require('fs');

const folderCopy = path.join(__dirname, 'files-copy');
const folder = path.join(__dirname, 'files');

fs.promises.readdir(folder)
.then(filenames => {
    fs.stat(folderCopy, function(err) {
        if (!err) {
            fs.rmdir(folderCopy, { recursive: true, force: true }, (err) => {console.log('Директория удалена');});
            if (err) throw err;
            console.log('Директория есть');
          }
    });   
    fs.mkdir(folderCopy, {recursive:true}, err => {
        if (err) throw err;
        console.log('Директория была создана');
      });
  for (let filename of filenames) {
    const fDirectIn = path.join(__dirname, 'files', filename);
    const fDirectOut = path.join(__dirname, 'files-copy', filename);  

    const streamIn = fs.createReadStream(fDirectIn, 'utf-8');
    const streamOut =  fs.createWriteStream(fDirectOut);
    streamIn.pipe(streamOut);
  }
})

.catch(err => {
  console.log(err);
})
