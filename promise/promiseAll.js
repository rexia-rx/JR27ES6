const dataOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = 'first data';
            resolve(data);
        }, 800)
    });
}

const dataTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = 'second data';
            resolve(data);
        }, 700)
    });
}

const handleBtnClick = () => {
    Promise.all([dataOne(), dataTwo()])
    .then((res) => {
        console.log('Passed');
    })
    .catch((err) => {
        console.log(err);
    })
}