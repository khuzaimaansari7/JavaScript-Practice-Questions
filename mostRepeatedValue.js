function mostRepeatedValue(arr){
    const frequency = {};
    let maxCount = 0;

    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;

        if(frequency[item] > maxCount){
            maxCount = frequency[item];
        }
    });

    const mostRepeated = [];
    for(const[key, count] of Object.entries(frequency)){
        if(count === maxCount){
            mostRepeated.push(key);
        }
    }

    return mostRepeated;
}

const array = [3, 5, 3, 7, 5, 3, 8, 5];
console.log(mostRepeatedValue(array)); // Output: [ '3', '5' ]