function missingElem(arr){

    let frquency = {};
    let value;

    for(let i = 0; i < arr.length; i++){
        if(frquency[arr[i]]){
            frquency[arr[i]]++;
        }
        else{
            frquency[arr[i]] = 1
        }
    }
    
    for(let i = 0; i < arr.length; i++){
        if(frquency[arr[i]] === 2){
            console.log("Repeating: ", arr[i])
        }
    }

    for(let i = 0; i < arr.length; i++){

        if(arr[i + 1] === arr[i] + 1){
            value = arr[i];
        }
        else if(arr[i + 1] !== arr[i] + 1){
            console.log("Missing Element: " , value + 2);
        }
        // if(arr[i + 1] !== arr[i] + 1){
        //     console.log("Missing: ", arr[i] + 1,"At index: ", i);
        // }
    }
}

let array = [1,2,3,4,1,6,7,9];
console.log(missingElem(array));