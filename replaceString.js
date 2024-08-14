s = "Hello world"
oldStr = s;
newStr = prompt("Write a New String: ");

function replaceString(s, oldStr, newStr){
    console.log("Original String: " + s);
    return s.split(oldStr).join(newStr);
}

console.log(replaceString(s, oldStr, newStr));