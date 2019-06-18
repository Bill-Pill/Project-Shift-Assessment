const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

var arraySum = 0;
array.forEach(function(num){
    arraySum += num;
});

var average = (arraySum/array.length);
console.log(average);