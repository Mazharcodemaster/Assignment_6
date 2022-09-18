var num:number =Number(prompt("Enter the value of num"))
var sum:number=0;
while(num!=0){

   sum=sum+num%10
   num=Math.floor( num/10);
}
console.log("Sum of the digit:",sum)
