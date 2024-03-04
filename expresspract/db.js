// const mongodb = require('mongodb');

// const url = 'mongodb://localhost:27017'

// let db;
// async function getDatabase(){
//     if(db){
//         return db;
//     }
//     const client = new mongodb.MongoClient(url);
//     try{
//         await client.connect();
//         db= client.db('avisoftpract');
//         return db;
//     }
//     catch(err){

//     }
//     finally{
//         client.close();
//     }
// }

// module.exports = getDatabase;