const Numbers = [15, 25, 0, 58, -45, 4, -3, 56, -98, 31];

function positiveNumber(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            arr.push(array[i])
        }
        else { break }
    }
    return arr;
}

console.log(positiveNumber(Numbers));