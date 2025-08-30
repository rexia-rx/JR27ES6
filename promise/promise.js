//callback hell
// const buyFruit = function(fruit, callback) {
//     setTimeout(() => {
//         console.log(fruit);
//         callback();
//     }, 1000);
// }

// buyFruit("apple", function() {
//     buyFruit("banana", function() {
//         buyFruit("orange", function() {
//             console.log('end');
//         });
//     });
// });

const buyFruit = function(fruit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(fruit);
            resolve("Done");
        }, 1000);
    });
}

buyFruit("apple")
    .then((res) => buyFruit(`${res}+banana`))
    .then((res) => buyFruit(`${res}+orange`))
    .then((res) => console.log(`${res}+end`))
    .catch((error) => console.log(error))
    .finally(() => console.log('finally'));

//promise