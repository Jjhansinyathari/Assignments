let originalString: string = "Java programming is fun and challenging";

console.log(" Sentence:");
console.log(originalString);

// 1. Count total number of words
let words: string[] = originalString.split(" ");
let wordCount: number = words.length;

console.log("Total number of words:");
console.log(wordCount);

// 2. Print words in reverse order
let reverseWords: string[] = [...words].reverse();

console.log("\nSentence words in reverse order:");
console.log(reverseWords.join(" "));

// 3. Convert first character of each word to uppercase
let upperCaseString: string = originalString.toUpperCase(); 
    console.log("upperCaseStringis:'"+upperCaseString+ "'");

