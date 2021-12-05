//Object property shorthand\

let name = 'Andrew'
let userAge = 27

let user = {
    name,
    age : userAge,
    location : 'Philadelphia'
}

// console.log(user)

//Object Destructuring

const product = {
    label : 'Red notebook',
    stock : 201,
    price : 3,
    rating : 10,
    salePrice : undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel, stock)
// console.log(rating)

const transaction = (type, { label = 'label', stock = 0 } = {}) => {
    console.log(type, label ,stock)
}

transaction('order')