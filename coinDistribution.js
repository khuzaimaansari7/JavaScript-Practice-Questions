function coinDistribution(amount, coins){

    coins.sort((a,b) => b - a);
    let result = [];

    for(let coin of coins){
        let count = Math.floor(amount / coin);
        amount %= coin;
        result.push([coin, count]);
    }
    return result;
}

amount = prompt("write an amount > 0: ");

console.log(coinDistribution(amount,[25,10,5,1]));