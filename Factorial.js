const readline = require('readline');
const rl = readline.createInterface
({
input: process.stdin,
output: process.stdout
});
rl.question("Please Enter a Number:", function(input)
{
let b = 1;
const n = parseInt(input);
if(n>10 || n<1)
{
    console.log("invalid");
    
}
else
{
  for (let i =1; i <= n; i++)
      b= i*b;
}
console.log(b);
rl.close()
});