const timeout = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = 'request timeout';
            resolve(data);
        }, 3000)
    })
}

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = 'some data';
            resolve(data);
        }, 2000)
    })
}

const handleBtnClick = () => {
    let promiseArr = [timeout(), fetchData()];
    Promise.race(promiseArr)
    .then(res => {
        if(res === 'request timeout') {
            console.log(res);
        } else {
            console.log('do something');
        }
    })
}

handleBtnClick();

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject("request timeout"), ms);
  });
}

Promise.race([fetchData(), timeout(1000)])
  .then(data => console.log(data))
  .catch(err => console.error(err));
// output: request timeout


