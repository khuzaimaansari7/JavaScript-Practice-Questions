function countConsecutiveChars(nums){
    let firstNum = -Infinity;
    let secondNum = -Infinity;
    let num;

    for(num of nums){
        if(num > firstNum){
            secondNum = firstNum;
            firstNum = num;
        }
        else if(num > secondNum && num !== firstNum){
            secondNum = num;
        }
    }
    return secondNum;
}
let nums = [5,1,3,4,2];
nums = [12,50,10,9,34];
console.log(countConsecutiveChars(nums));