function RentalCostCalculation(days,carType)
{
    let rentalCost=0;
    switch (carType) {
        case 'Economy':
          rentalCost = 4000;
          break;
        case 'Midsize':
          rentalCost = 15000;
          break;
        case 'Luxury':
          rentalCost = 25000;
          break;
        default:
          console.log('Invalid car type');
          return null;
      }
    return rentalCost*days;
    
}
 

console.log(RentalCostCalculation(4,'Economy'));