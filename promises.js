const { resolve } = require("path");

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error first?")
        resolve([7,7,7])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})