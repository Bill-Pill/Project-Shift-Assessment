
// Returns the minimum amount of bills necessary to cover the cost, given an array of desired bills
function withdrawToBills(cost, billsArr) {
    // Checks if bills array contains appropriate bills, otherwise exit function
    for(var i = 0; i < billsArr.length; i++) {
        var bill = billsArr[i]
        if(bill != 100 && bill != 50 && bill != 20 && bill != 10 && bill != 5 && bill != 1){
            alert(bill + " is not a bill denomination!")
            return;
        }
    }

var billCount = {};

    // Checks if 100 is needed to cover the cost and if requested.
    // If so, adds to billCount object and checks the new cost
    // Repeats descending for all other bill denominations
    while (cost >= 100 && billsArr.includes(100)){
        if (!billCount["100"]){
            billCount["100"] = 1;
        } else {
            billCount["100"] += 1;
        }
            cost -= 100;
    }
    while (cost >= 50 && billsArr.includes(50)){
        if (!billCount["50"]){
            billCount["50"] = 1;
        } else {
            billCount["50"] += 1;
        }
            cost -= 50;
    }
    while (cost >= 20 && billsArr.includes(20)){
        if (!billCount["20"]){
            billCount["20"] = 1;
        } else {
            billCount["20"] += 1;
        }
            cost -= 20;
    }
    while (cost >= 10 && billsArr.includes(10)){
        if (!billCount["10"]){
            billCount["10"] = 1;
        } else {
            billCount["10"] += 1;
        }
            cost -= 10;
    }
    while (cost >= 5 && billsArr.includes(5)){
        if (!billCount["5"]){
            billCount["5"] = 1;
        } else {
            billCount["5"] += 1;
        }
            cost -= 5;
    }
    while (cost >= 1 && billsArr.includes(1)){
        if (!billCount["1"]){
            billCount["1"] = 1;
        } else {
            billCount["1"] += 1;
        }
            cost -= 1;
    }
    return billCount;
}

// Test Function
//withdrawToBills(1754, [100, 5, 1]);