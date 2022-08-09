const bestFriend = ['Atik', 'Milton', 'Mizan'];

function longestString(array) {
    var maxLength = 0;
    var longestWord;
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            var maxLength = array[i].length;
            longestWord = array[i];
        }
    }
    return longestWord;
}
console.log(longestString(bestFriend));
