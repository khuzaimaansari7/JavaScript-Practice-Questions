function sumUsingReduce(nums){
    return nums.reduce((sum, num) => sum + num, 0);
}

let inputArray = [1,2,3,4,5];
let result = sumUsingReduce(inputArray);

console.log(result);