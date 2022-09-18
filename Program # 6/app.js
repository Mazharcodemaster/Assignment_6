var a = Number(prompt("Enter the value of a"));
var b = Number(prompt("Enter the value of b"));
var c = a;
var sum = 0;
while (c <= b) {
    console.log("Natural number between from a to b", c);
    sum = sum + c;
    c++;
}
console.log("Sum of natural number", sum);
