var Digit = Number(prompt("Enter the value of Digit"));
// let x=598595
var last_Digit = Digit % 10;
var first_Digit = Digit;
while (first_Digit > 10) {
    first_Digit = first_Digit / 10;
}
var sum_ofdigit = first_Digit + last_Digit;
console.log(Math.floor(first_Digit));
console.log("Last Digit", last_Digit);
console.log("Sum of Digit", Math.floor(sum_ofdigit));
