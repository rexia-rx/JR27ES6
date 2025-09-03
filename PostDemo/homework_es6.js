"use strict";
const postCallbackData = (url) => {
    console.log(`Data from [${url}]`);
};
const fetchCallbackData = (url, postTestData) => {
    console.log(`Fetching data from [${url}]...`);
    setTimeout(() => {
        postTestData(url);
    }, 2000);
};
const fetchPromiseData = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!url)
                reject('Invalid URL');
            else
                resolve(`Data from [${url}]`);
        }, 2000);
    });
};
const loadData = async () => {
    try {
        const data = await fetchPromiseData('https://jsonplaceholder.typicode.com/posts');
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};
const sumNumber = (a, b) => {
    return a + b;
};
const greet = (person) => {
    console.log(`Hello ${person.name} your age is ${person.age}`);
};
const newItem = { name: "John", age: 30 };
greet(newItem);
