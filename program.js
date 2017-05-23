var number = process.argv;
var sum = 0;
for (var i=2; i<number.length; i++) {
    sum += Number(number[i]);
}

console.log(sum);