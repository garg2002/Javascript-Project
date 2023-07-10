function calculateTotalBill(costPerDish, numberOfPeople) {
    const totalBill = costPerDish * numberOfPeople;
    const billPerPerson = totalBill / numberOfPeople;
    
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }

  console.log(calculateTotalBill(400,15));