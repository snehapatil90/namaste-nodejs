require('./xyz') // one module into another
// const obj = require('./sum')
// const {x, calculateSum} = require('./calculate/sum')
// const {calculateMultiply} = require('./calculate/multiply')

// import {x, calculateSum} from './sum.js' //newer way (ejs)
const data = require('./data.json')
const {calculateSum, calculateMultiply} = require('./calculate')
var title = 'Namaste NodeJS'

var a = 10;
var b = 20;
console.log(data)
// obj.calculateSum(a, b)
calculateSum(a, b)
calculateMultiply(a, b)

// console.log(global)
// console.log(this) //{} empty object
// console.log(globalThis)
// console.log(globalThis === global) //true