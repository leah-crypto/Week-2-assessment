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
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
//const cart = [ {name: 'pizza', price: 9.99}, {name: 'pasta', price: 8.99}, {name: "salad", price: 7.99} ];
let acc = 0;

const summedPrice = cart.reduce((name, price => name + price));

console.log(summedPrice);



//const newSummedPrice = cart.reduce((a, c) => {a + c}, 10)
//(function(acc, curr)){
   // return acc + curr;
//}






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

// function calcFinalPrice(cartTotal, couponValue, tax){

// }

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
const customer = {
    transactionId: Ghki780
    cardNum: 78547909;
    exp: 10/26;
    cvc: 567;
    zip: 67893
    email: "jonDoe@gmail.com";
    phone: 817-545-9875;
    firstName: "Jon";
    lastName: "Doe";
}