let item = prompt(`Please name the item you wish to purchase.`);
let basePrice = Number (prompt(`What is the base price of the item?`));
let blackFriday = prompt(`Is today Black Friday? Answer yes or no.`);
let searchEngine  = prompt(`Did you find the product through a search engine? Answer yes or no.`);
let comparisonShopping = prompt(`Did you visit a comparison-shopping site? Answer yes or no.`);
let finalPrice = basePrice;
let message = "";


if (blackFriday === "yes") {
    finalPrice *= .75;
    console.log(`Since it's Black Friday, we will reduce the price by 25%.Your ${item} price is now $ ${finalPrice}` );
} else if (blackFriday === "no") {
    finalPrice = basePrice;
    console.log(`It\'s not Black Friday, so the price didn\'t change for that. Your ${item} price is still $ ${finalPrice}`);
} else {
    alert('ERROR!')
};

if (searchEngine === "yes") {
    finalPrice *= 1.01;
    console.log(`We will increase the price by 1% to pay the search engine. Your ${item} price is now $ ${finalPrice}`);
} else if (searchEngine === "no") {
    console.log(`The customer didn't use a search engine, so the price didn't change for that. Your ${item} price is still $ ${finalPrice}`);
} else {
    alert('ERROR!')
};

if (comparisonShopping === "yes") {
    finalPrice *= .90;
    console.log(`Since the customer visited a comparison-shopping site, we will reduce the price by 10%. Your ${item} price is now $ ${finalPrice}`);
} else if (comparisonShopping === "no" ){
    console.log(`The customer didn't visit a comparison-shopping site, so the price didn't change for that. Your ${item} price is still $ ${finalPrice}`);
} else {
    alert('ERROR!')
};




console.log(`The base price for the ${item} is ${basePrice}. The final price is ${finalPrice.toFixed(2)}`);



