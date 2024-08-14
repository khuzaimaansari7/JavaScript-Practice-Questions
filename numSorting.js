function numsorting(num){
    return num.sort((a,b) => a-b);
}

let num = [5,25,3,12,10,15];
console.log(numsorting(num));