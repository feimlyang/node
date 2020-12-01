

const doWorkCallback = (callback) =>{
    setTimeout(()=> {
        callback(undefined, [7,7,7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error){
        return console.log(error)
    }
    console.log(result)
})



// const add = (a, b, callback) => {
//     setTimeout(() => {
//         callback(a + b)
//     }, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum)
// })

