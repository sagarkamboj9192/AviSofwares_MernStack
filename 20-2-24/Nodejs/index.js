const fileSystemModule = require('./fileSystemModule');
const {writeAFile, readAfile, makeaNewDirectory, display} = fileSystemModule();
const prompt = require('prompt-sync')();


// By this we can simply any function or we can use switch cases to apply all functions.....


// Basically i just try to preview all function to check all functions are working properly...

const directory  = prompt('Enter the directory where you want to list all files = ');
makeaNewDirectory(directory);

console.log('To write a file .........');
const filepath = prompt('Enter the filepath: ');
const content = prompt('Enter the content: ');
writeAFile(filepath, content);

console.log("Once again write a file...");
const filepat = prompt('Enter the filepath: ');
const conten = prompt('Enter the content: ');
writeAFile(filepat, conten);

const read = prompt("To read a file , enter a filepath: ");
readAfile(read);

const dis = prompt('Enter the path directory to list all items: ');
display(dis);