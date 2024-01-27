// console.log("START");
// setTimeout(()=> {
//     console.log("Timeout 1");
// },0);

// setImmediate(()=> {
//     console.log("Timeout 2");
// },0);
// console.log("END");

console.log("START");
setTimeout(() => {
    console.log("Timeout 1");
}, 0);
setImmediate(() => {
    console.log("Timeout 2");
}, 0);

Promise.resolve()
    .then(() => {
        setTimeout(() => {
            console.log("Timeout 3");
        }, 0);
        setImmediate(() => {
            console.log("Timeout 4");
        }, 0)
    });
console.log("END");