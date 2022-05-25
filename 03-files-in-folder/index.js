const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) =>  {
  if(err) throw err; 
  else {
       files.forEach((file) => {
        const filePath = path.join(__dirname, 'secret-folder/', file.name);
        fs.stat(path.join(__dirname, 'secret-folder/', file.name), (error, stats) => {
          if (stats.isFile()) {
            console.log(`${file.name.split(".")[0]} - ${file.name.split(".")[1]} - ${stats.size/1000} kb`);
          }
        });
      });
    }
  }
);
