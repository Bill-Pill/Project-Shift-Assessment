var arr1 = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
var arr1Counts = {};
var arr2 = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];
var arr2Counts = {};
var result = [];

function overlap(arr1, arr2) {
    
    // Count each occurence in both arrays and adds to corresponding object
    arr1.forEach(function(letter){
        if (!arr1Counts[letter]) {
            arr1Counts[letter] = 1;
        } else {
            arr1Counts[letter] += 1;
        }
    })
    
    arr2.forEach(function(letter){
        if (!arr2Counts[letter]) {
            arr2Counts[letter] = 1;
        } else {
            arr2Counts[letter] += 1;
        }
    })
    
    // Compare both array objects to find the overlap of each letter and add to result array
    for (var letter in arr1Counts) {
        if(!arr2Counts[letter]) {
            continue
        }
        var overlapCount;

        
        if (arr1Counts[letter] >= arr2Counts[letter]){
            overlapCount = arr2Counts[letter];
        } else {
            overlapCount = arr1Counts[letter]
        }
        var i = 0;        
        while (overlapCount > i){
            result.push(letter)
            i++
        }
    }
    return result;
}
//overlap(arr1,arr2)
