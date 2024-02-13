// Write your code here
var order = [2,3,1,5];
var coffePrice = 1.25;



function coffeBill(coffes, price) {
  var sum = coffes.reduce((previous,current) => {
    return previous + current;
  },0)
  var totalBill = price * sum;
  return `Total price ${totalBill}$`;
}

console.log(coffeBill(order,coffePrice));


