const path = require('path');
const fs = require('fs');

const pathFiles = path.join(__dirname, './files');
const pathFilesCopy = path.join(__dirname, './files-copy');

async function copyDir() {
  try {
    await fs.promises.rmdir(pathFilesCopy, { recursive: true, force: true });
    await fs.promises.mkdir(pathFilesCopy, { recursive: true });

    const dirFiles = await fs.promises.readdir(pathFiles, { withFileTypes: true });

    for (let file of dirFiles) {
      let myFiles = path.join(pathFiles, `./${file.name}`);
      let myFilesCopy = path.join(pathFilesCopy, `./${file.name}`);
      if (file.isDirectory()) {
        copyDir(myFiles, myFilesCopy);
      } else {
        await fs.promises.copyFile(myFiles, myFilesCopy);
      }
    }

  } catch (err) {
    console.error(err.message);
  }
}

copyDir();
