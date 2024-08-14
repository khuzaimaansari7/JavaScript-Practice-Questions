function stringSorting(s){
    s.sort((a,b) => a.price - b.price);
    return s;
}

const fruits = [
    {name: 'Apple', price: 100},
    {name: 'Grapes', price: 200},
    {name: 'watermelon', price: 50},
    {name: 'Banana', price: 75},
];

console.log(stringSorting(fruits));