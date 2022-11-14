///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

// let sum = 0;
// for (let n of cart){
//     sum +=n;
// }
// cart = [9.99, 8.99, 7.99];
//let allPrice = cart.price;

const summedPrice = cart.reduce((accumulator, currentValue) => {
  ///with this one I feel like its not working becuase its not acessing price
  return accumulator + currentValue.price;
}, 0);
console.log(summedPrice);

// console.log(summedPrice);
// const value = cart.reduce(callback[ initialValue]);

// cart.reduce(function())

// const summedPrice = cart.reduce(function(price, price, price){
//     return price+price+price;
// });

//     console.log(summedPrice);
//name, price => name + price));

// const summedPrice = cart.reduce(function (price){
//     return cart.price +cart.price+cart.price;
//   });

//   console.log(summedPrice);

// const newSummedPrice = cart.reduce((a, c) => {a + c}, 10){
// //(function(acc, curr)){
//    return a + c;
// }

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
// let cartTotal = 26.97;
// let couponValue = 5.99;
// let tax = .06;
//look up best methods to calcuate tax to figure out how to do it?

function calcFinalPrice(cartTotal, couponValue, tax){
    cartTotal = summedPrice;
    //let timeTax = cartTotal * tax;
    let addTax = cartTotal + tax;
    let minusCoupon = addTax - couponValue;
    return minusCoupon;
        //console.log(cartTotal + tax - couponValue);
 }
console.log(calcFinalPrice);
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 

*/

/*  PLAN-   restruant would need info about:
    card info like card number
    contact info like phone or email
    personal info like name
    a way to track and sort the transaction like an id for primary key
/*
    TEXT ANSWER HERE
First I choose all of the card information like the number, experation date, and cvc
because the restruant cant charge its coustumers without that to make a profit.
Next I put in the customers email for a mailing list, and phone number incase they needed to make contact
Finally I of course added in the first and last name of the customer and also a transaction ID to be able to tell data apart from one another.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
// const customer = {
//     transactionId: Ghki780,
//     cardNum: 78547909,
//     exp: 10/26,
//     cvc: 567,
//     zip: 67893,
//     email: "jonDoe@gmail.com",
//     phone: 817-545-9875,
//     firstName: "Jon",
//     lastName: "Doe"
// }
