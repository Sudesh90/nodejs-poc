// simple promise examle with diff constructs resolve and reject

const checkStatus = (name) => {
    return (name == "Sudesh") ? true : false;
}

const myPromise = new Promise((resolve, reject) => {
    let status = checkStatus("Mukesh");
    return (status) ? resolve(`Status is ${status}`) : reject(`Sorry, status is ${status}`);
})

myPromise.then(value => {
    console.log(`resolve value ${value} `);
}).catch(err => {
    console.log(`error ${err}`);
})

// Combining promises
const promise1 = Promise.resolve(3);
const promise2 = 4;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'foo');
});
const promises = [promise1, promise2, promise3];
// Using Promise.all
Promise.all(promises).then((values) => {
    console.log(`All values ${values}`);
}).catch((err) => {
    console.log(`All error ${err}`);
})

// Using Promise.any
Promise.any(promises).
    then((values) => { console.log(`Any values ${values}`) })
    .catch((err) => { console.log(`Any err ${err}`) });

// Using Promise.allSettled
Promise.allSettled(promises).then((values)=> {
    values.forEach((value) => console.log(value));
}).catch((err)=> {
    console.log(`All error ${err}`);
});