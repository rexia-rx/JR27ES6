const buyFruit = (fruit) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(fruit);
            resolve(fruit);
        }, 1000);
    });
}

const fetchFruit = async () => {
    try {
        const res = await buyFruit("apple");
        await buyFruit("orange");
        await buyFruit("banana");
    } catch (error) {
        console.log(error);
    }
}

fetchFruit();