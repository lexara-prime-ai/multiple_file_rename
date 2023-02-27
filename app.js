const log = console.log;
const fs = require('fs');
const path = require('path');
let dir_path = path.join(__dirname);
let old_name;
fs.readdir(dir_path, (err, data) => {
    if (err) console.error(`${err.name}\t${err.message}`);
    // ADD MORE PARAMETERS HERE
    old_name = data[2];
    log('File to rename : ', old_name,'...');
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readline.question('Enter new file name : ', (new_name) => {
        // ADD QUERIES FOR MULTIPLE FILES
        fs.rename(old_name, new_name, (err) => {
            if (err) console.error(`${err.name}\t${err.message}`);
            log('File renamed successfully!');
        });
        readline.close();
    });
});


