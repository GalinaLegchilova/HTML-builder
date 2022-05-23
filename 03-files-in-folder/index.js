const fs = require('fs');
const path = require('path')
fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) => {
    if(err) throw err; 
    for(let i = 0; i < files.length; i++){
		console.log(files[i].split(".")[0] + ' - ' + files[i].split(".")[1]+ ' - ' +
        fs.statSync(path.join(__dirname, 'secret-folder/') + files[i]).size/1000 + 'kb'
        )
	}
});
