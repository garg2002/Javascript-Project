const cartItemUserSelected = [20,100,30,100,40,10];
const newCart =[];
cartItemUserSelected.forEach(Element =>
    {
        if(!newCart.includes(Element))
        {
            newCart.push(Element)
        }
    })
console.log(newCart);