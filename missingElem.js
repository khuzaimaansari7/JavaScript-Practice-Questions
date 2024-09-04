function missingElem(arr){

    let frquency = {};
    let value;

    for(let i = 0; i < arr.length; i++){
        if(frquency[arr[i]]){
            frquency[arr[i]]++;
        }
        else{
            frquency[arr[i]] = 1;
        }
    }
    
    for(let i = 0; i < arr.length; i++){
        if(frquency[arr[i]] === 2){
            console.log("Repeating: ", arr[i]);
        }
    }

    for(let i = 1; i < arr.length; i++){

        if(arr[i] === arr[i - 1] + 1){
            value = arr[i];
        }
        else if(arr[i] !== arr[i - 1] + 1){
            console.log("Missing Element: " , value + 1, "At Index: ", i);
            i++;
        }
    }
}

let array = [1,2,3,4,1,6,7,7];
console.log(missingElem(array));