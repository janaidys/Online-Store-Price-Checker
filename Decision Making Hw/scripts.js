let item = prompt(`Please name the item you wish to purchase.`);
let basePrice = Number (prompt(`What is the base price of the item?`));
let blackFriday = prompt(`Is today Black Friday? Answer yes or no.`);
let searchEngine  = prompt(`Did you find the product through a search engine? Answer yes or no.`);
let comparisonShopping = prompt(`Did you visit a comparison-shopping site? Answer yes or no.`)


if (blackFriday === "yes") {
    console.log(basePrice -  (basePrice * .25));
    console.log(`Since it's Black Friday, we will reduce the price by 25%.`);
} else {
    console.log("It's not Black Friday, so the price didn't change for that. ");
};

if (searchEngine === "yes") {
    console.log(basePrice + (basePrice * .01));
    console.log("We will increase the price by 1% to pay the search engine. ");
} else {
    console.log("The customer didn't use a search engine, so the price didn't change for that. ");
};

if (comparisonShopping === "yes") {
    console.log(basePrice - (basePrice * .10));
    console.log("Since the customer visited a comparison-shopping site, we will reduce the price by 10%. ");
} else {
    console.log("The customer didn't visit a comparison-shopping site, so the price didn't change for that. ");
};

let finalPrice = (basePrice - (basePrice * .25) + (basePrice * .01) - (basePrice * .10));


if (blackFriday === "yes" && searchEngine === "yes" && comparisonShopping === "yes") {
    console.log(`The base price for the ${item} is ${basePrice}. Since it's Black Friday, we will reduce the price by 25%. We will increase the price by 1% to pay the search engine. Since the customer visited a comparison-shopping site, we will reduce the price by 10%. The final price is ${finalPrice}.`);
};


