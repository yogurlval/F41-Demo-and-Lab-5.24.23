////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
// Each math operation is the callback function: add, subtract, multiply, divide.

// One line arrow function with implicit return

const add = (num1, num2) => num1 + num2

//Regular arrow function

const subtract = (num1, num2) => {
  return num1 - num2
}

// Function Expression

const multiply = function(num1, num2){
  return num1 * num2
}

// Function declaration

function divide (num1, num2){
  return num1 / num2
}

////////// OUTER FUNCTION or HIGHER ORDER FUNCTION ///////

const calculator =(num1, num2, callback)=>{
  return callback(+num1, +num2)
  //make sure the returned values are converted to numbers
}

// console.log(calculator(2, 3, add))
// console.log(calculator(3, 7, multiply))
// console.log(calculator("7", "7", multiply))


// const calc = (num1, num2, cb)=>{
//   if(+num1 && +num2){
//       num1 = +num1
//       num2 = +num2
//       return cb(num1, num2)
//   }else {
//       return "not a valid input"
//   }
// this would be the use case for the if statement, so that if they strings cannot be converted you could respond with something else.



///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// console.log(catProducts[1].displayPrice)

/// CALLBACK ///
//Apply Percent Discount

const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount) //25% = 0.25
}

//Flat Rate Discount

const applyFlatRateDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount 
}

/////////OUTER FUNCTION///////////
const applyDiscount = (arr, callback, discount) => {
for(let i = 0; i < arr.length; i++)
callback(arr[i], discount)
}

applyDiscount(dogProducts, applyPercentDiscount, .25)
// console.log(dogProducts)

applyDiscount(catProducts, applyFlatRateDiscount, 3)
console.log(catProducts)


////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
