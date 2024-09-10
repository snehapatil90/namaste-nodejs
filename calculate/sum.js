// Module protects their variables and functions from leaking
console.log('sum module executed')
var x = 'Hello world'
function calculateSum(a, b) {
    const sum = a + b
    console.log(sum)
}

console.log(module.exports) //{} empty object

module.exports = {x,calculateSum}

// module.exports = {x:x,
//     calculateSum:calculateSum}
// either of these can be used 
// module.exports.x = x
// module.exports.calculateSum = calculateSum