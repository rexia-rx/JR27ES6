const postCallbackData = (url:string) => {
    console.log(`Data from [${url}]`);
}

const fetchCallbackData = (url:string, postTestData:any) => {
    console.log(`Fetching data from [${url}]...`);
    setTimeout(() => {
            postTestData(url);
    }, 2000);
}

const fetchPromiseData = (url?:string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!url)
                reject('Invalid URL');
            else
                resolve(`Data from [${url}]`);
        }, 2000)
    })
}

const loadData = async () => {
    try {
        const data = await fetchPromiseData('https://jsonplaceholder.typicode.com/posts');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const sumNumber = (a:number, b:number) => {
    return a + b;
}

type Person = {
    name:string;
    age:number;
}

const greet = (person:Person) => {
    console.log(`Hello ${person.name} your age is ${person.age}`);
}

const newItem:Person = {name: "John", age: 30};
greet(newItem);