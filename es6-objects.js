//obj property shorthand
const name = 'Karen'
const age = 26
const user = {name, age}
console.log(user)
console.log(user.name)


//obj destructuring
const product = {
    label: 'notebook',
    price: 3,
    salePrice: undefined,
    rating: 4
}
// const label = product.label

// const {label: productLabel, price, rating = 5, stock} = product
// console.log(stock) //not crashing, just undefined
// console.log(productLabel)
// console.log(price)
// console.log(rating) //4


const transaction = (type, {label, price}) => {
    console.log(type, label, price)
}
transaction('order', product)