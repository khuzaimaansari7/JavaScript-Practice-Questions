function fibonacci(){
    let arr = [0,1];
    
    for(let i = 2; i <= 10; i++){
          arr[i] = arr[i - 2] + arr[i - 1];
    }

    return arr;
}

console.log(fibonacci());