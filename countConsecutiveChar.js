function countConsecutiveChars(s) {
    if (!s) return ""; // Return empty string if input is null or empty

    let result = ""; // Initialize the result string
    let count = 1; // Initialize the counter for consecutive characters

    for (let i = 1; i < s.length; i++) { // Loop through the string from the second character
        if (s[i] === s[i - 1]) { // Check if the current character is the same as the previous one
            count++; // Increment the counter
        } else {
            result += count + s[i - 1]; // Append count and previous character to result
            count = 1; // Reset the counter
        }
    }

    result += count + s[s.length - 1]; // Append the count and last character to result
    return result; // Return the final result string
}

let inputString = "abbbccaaa"
console.log(countConsecutiveChars(inputString)); // Output: "1a3b2c3a"
