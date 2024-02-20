const { error } = require('console');
const fs = require('fs');
const { json } = require('stream/consumers');

// fs.writeFileSync("first.txt","It is a beautiful day!");

// fs.appendFileSync("first.txt","\nThat a thought of the day.");

const userInfo = {
    id:1,
    name:"sagar",
    email:"sagar123"

}

// const message = `${userInfo.name} with id :${userInfo.id} and date is ${new Date()}`;

// const message = `${JSON.stringify(userInfo)}\n`;

// fs.appendFileSync("first.txt", message);



// for read...
// const readfile = fs.readFileSync('./Practice/first.txt');
// console.log(readfile);   // print in buffer
// console.log(readfile.toString());





// create file withiout using sync  ............................................

// fs.writeFile("log.txt", "hello", ()=>{
//     console.log("File created");      // async need a callback function
// })

// fs.appendFile("log.txt","\nAppended a text", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Updated");
//     }
// })



// fs.readFile('./Pracitce/log.txt', "utf-8", (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });



fs.close;