function findIndex(nums, target){

    for(let i=0; i< nums.length; i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
}

let inputArray = [1,2,3,4,5,6,7,8,9,10];
let result = findIndex(inputArray, 9);

console.log(result);