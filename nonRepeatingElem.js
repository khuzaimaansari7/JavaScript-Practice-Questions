//if theres a string "Google", return the first non repeating element in this string. 
//if there is no element repeating return null. input: Google, output: l

function nonRepeatingElem(str){

    let frequency = {};
    str = str.toLowerCase();

    for(let char of str){
        if(frequency[char]){
            frequency[char]++;
        }
        else{
            frequency[char] = 1;
        }
    }

    for(let char of str){
        if(frequency[char] === 1){
            return char;
        }
    }
    return null;

}

let string = "Google";
console.log(nonRepeatingElem(string));