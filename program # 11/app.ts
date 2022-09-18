let Digit=Number(prompt("Enter the value of Digit"))
// let x=598595
let last_Digit=Digit%10;
let first_Digit=Digit
while(first_Digit>10){
    first_Digit=first_Digit/10
    
}
console.log(Math.floor(first_Digit))
console.log("Last Digit",last_Digit)


