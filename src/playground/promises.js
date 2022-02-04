
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     Name: 'Matthew',
        //     Age: 31
        // });
        reject('Something went wrong');
    }, 4000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data)
}).catch((error) => {
   console.log('error', error);
});

console.log('after');