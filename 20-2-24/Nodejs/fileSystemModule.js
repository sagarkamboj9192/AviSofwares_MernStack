const {mkdirSync} = require('fs');
const { writeFile, readFile } = require('fs/promises');

const fs = require('fs');

function fileSystemModule(){

    const writeAFile = async (filepath, content)=>{
        try{
            await writeFile(`./20-2-24/Nodejs/${filepath}`, content, {flag : 'w'});
        }
        catch(error){
            console.log(error);
        }
        
    }
    
    const readAfile = async ( filepath)=>{
        try{
            const data = await readFile(`./20-2-24/Nodejs/${filepath}`);
            console.log(data.toString());
        }
        catch(error){
            console.log("File doesn't exitst or your path is not correct3! ", error);
        }
    }
    
    const makeaNewDirectory = (filepath)=>{
        mkdirSync(`./20-2-24/Nodejs/${filepath}`);
    }
    
    const display = (directory)=>{
        
        let filenames = fs.readdirSync(`./20-2-24/Nodejs/${directory}`); 
        console.log("\nFilenames in directory:"); 
        filenames.forEach((file) => { 
        console.log("File:", file); 
}); 
    }
    
    return {
        writeAFile,
        readAfile,
        makeaNewDirectory,display
    };
}

module.exports = fileSystemModule;