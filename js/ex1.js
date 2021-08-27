var newString = []

function longestWord() {
    var string = prompt('Input your string: ')
    var str = string.split(" ");
    var longest = 0;
    var Word = null;

    str.forEach(function (str) {
        if (longest < str.length) {
            longest = str.length;
            Word = str;
            newString.push(Word)
        }
    });

    return Word;
    
}

console.log(longestWord())
console.log(newString)