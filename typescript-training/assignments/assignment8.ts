let sentence: string = "Java programming is fun and challenging. Java is widely used. I love Java.";

let originalWord: string = "Java";

// Split sentence by word
let parts = sentence.split(originalWord);

// Count occurrences
let count = parts.length - 1;

// Find indexes manually
let indexes: string = ", ";
let currentIndex = 0;

for (let i = 0; i < count; i++) {
    currentIndex +=(parts[i] || "").length;
    indexes += currentIndex;
    
     indexes += currentIndex;

    if (i < count - 1) {
        indexes += ", ";
    }

    currentIndex += originalWord.length;
}

// Output
console.log("Sentence: " + sentence);
console.log("Search Word: " + originalWord);
console.log("Total Occurrences: " + count);
console.log("Indexes: " + indexes);