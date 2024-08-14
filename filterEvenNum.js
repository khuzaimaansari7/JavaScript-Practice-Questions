let nums = [1,2,3,4,5,6,7,8,9,10];
let strings = ['apple', 'pear', 'banana', 'kiwi', 'plum'];
let people = [
    {name: 'Khuzaima', age: 22},
    {name: 'Irfan', age: 23},
    {name: 'Hamza', age: 25},
]

//function for filter Even numbers from the array.
//with mod it wil be num % 2 === 0.
//without mod it will be (num & 1).
function filterEvenNum(nums){
    return nums.filter(num => (num & 1) === 0);
}
console.log(filterEvenNum(nums));

//function for filter odd numbers from the array.
//with mod it wil be num % 2 !=== 0.
//without mod it will be (num & 1) !== 0.
function filterOddNum(nums){
    return nums.filter(num => num % 2 !== 0);
}
console.log(filterOddNum(nums));

//fuction for filter the string whose length is equals to 6
function filterShortStrings(strings) {
    return strings.filter(str => str.length === 6);
}
console.log(filterShortStrings(strings));

function filterByAge(people, minAge){
    return people.filter(person => person.age > minAge);
}
console.log(filterByAge(people, 22));