var rngs = function rngs(seeds, timeRandom, max) {
    
    var timeSeed = 0;

    if (timeRandom === true) {
        timeSeed = new Date().getTime();
    }

    var numbers = seeds.map(seed => {
        var asciiSum = toAsciiSum(seed);
        var number = asciiSum + timeSeed;
        return (number % max) + 1;
    });

    return numbers;
}

function toAsciiSum(string) {
    var stringArray = string.split('');
    var stringAsciiArray = stringArray.map(x => x.charCodeAt(0));
    return stringAsciiArray.reduce((a,b) => a + b);
}

exports.rngs = rngs;