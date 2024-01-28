const fs = require('fs');

// Prepare data
// const file = fs.createWriteStream('./content.txt');
// for(let i = 0; i <= 5; i++){
//     file.write('Training 4 @ENBD \n');
// }
// file.end();
/*
Output -
Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 
*/

 const server = require('http').createServer();
//  server.on('request', (req, res)=> {
//     fs.readFile('./content.txt', (err, data) =>{
//         if(err) throw err;
//         res.end(data);
//     });
//  });

 server.listen('8000', () => {
    console.log('server started');
 })

 /*
 Output -
 http://127.0.0.1:8000/

 Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 

 */

//Reading with streams
server.on('request', (req, res)=> {
    const content = fs.createReadStream('./content.txt');
    content.pipe(res);
})

 /*
 Output -
 http://127.0.0.1:8000/

 Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 
Training 4 @ENBD 

 */
