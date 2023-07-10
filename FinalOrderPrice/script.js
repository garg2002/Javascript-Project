let cart = {
    10:1,
    20:3,
    40:1,
    100:1
};
let  calculateTotalCost = cart => {
    let totalCost = 0;
    
    for (let i = 0; i < cart.length; i++) {
      totalCost += cart[i].unitPrice * cart[i].quantity;
    }
    
    return totalCost;
  }
console.log(calculateTotalCost());  