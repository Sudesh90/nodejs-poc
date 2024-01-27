// Check the thread pool size
// const os = require('os');
// console.log(os.cpus().length);

// // Asynchronous flow
// console.log(1);
// console.log(2);
// console.log(3);

// Read file - Sysnchronous operation (Blocking)
// const fs = require('fs');
// console.log(1);
// let content = fs.readFileSync('./file.txt','utf-8');
// console.log(`file content -  ${content}`);
// console.log(2);

// Read file - Asynchronous operation (non blocking)
// const fs = require('fs');
// console.log(1);
// fs.readFile('./file.txt','utf-8', (err, content) =>{
//     if(!err){
//         console.log(`file content  == ${content}`);
//     }
//     else{
//         console.log('error occured during file reading!');
//     }
// });
// console.log(2)

// Control flow of execution
function callControlFow() {
    console.log(1);
    setTimeout(() => {
        console.log(2);
    }, 1000);
}

setTimeout(() => {
    console.log(3);
}, 0);

console.log(4);

callControlFow();

