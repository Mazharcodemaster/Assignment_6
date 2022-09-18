var num = Number(prompt("Enter the value of num"));
var sum = 0;
while (num != 0) {
    sum = sum + num % 10;
    num = Math.floor(num / 10);
}
console.log("Sum of the digit:", sum);
