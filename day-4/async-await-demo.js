//without async await
// const asyncFn = () => {
//     console.log("Started");

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000);
//     });
//     promise.then((result) => {
//         console.log("done from promise");
//     }).catch((reject) => {
//         console.log("sorry, rejected");
//     });

//     console.log("END");
// }
// asyncFn();

// const asynAwait = () => {
const asynAwait = async () => {
    console.log("Started");
    let promise = new Promise((resolve, reject) => {
        console.log("inside promise");
        setTimeout(() => resolve("done!"), 1000);
    });
    console.log("waiting");
    console.log(`promise ${promise}`);
    // let promiseResult = promise;
    // console.log(`promise result ${promiseResult}`);

    let promiseResult = await promise;
    console.log(`promise result ${promiseResult}`);
}

asynAwait();

/* Output Without async await
Started
inside promise
waiting
promise [object Promise]
promise result [object Promise]
*/

/*
 Output with async await
Started
inside promise
waiting
promise [object Promise]
promise result done!
*/
