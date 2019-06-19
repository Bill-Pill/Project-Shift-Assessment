const array = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];
var frequency = {"a" : 0, "b" : 0, "c" : 0, "d" : 0, "e" : 0}

// loops through array and adds to frequency object
array.forEach(function(letter){
    frequency[letter] += 1;
})

// Initialize dummy variable values
var isHighest = 0;
var isLowest = 10;
var highLetter;
var lowLetter;

// Frequency object loop determining the highest and lowest letter frequency
for(var letter in frequency) {
    if(frequency[letter] > isHighest) {
        isHighest = frequency[letter];
        highLetter = letter
    }
    
    if(frequency[letter] < isLowest) {
        isLowest = frequency[letter]
        lowLetter = letter
    }
}

console.log("The most frequent item is: " + highLetter + ". The least frequent item is: " + lowLetter)

