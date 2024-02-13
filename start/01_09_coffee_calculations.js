// Write your code here
var order = [2,3,1,5];
var coffePrice = 1.25;

var sum = order.reduce((previous,current) => {
  return previous + current;
},0)

var totalBill = coffePrice * sum;

console.log(`Total price ${totalBill}`);



