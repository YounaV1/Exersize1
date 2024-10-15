const readline = require('readline');
const rl = readline.createInterface
({
input: process.stdin,
output: process.stdout
});
rl.question("Please Enter a Number:", function(input)
{
const tempreture = parseInt(input);
if(tempreture > 100)
{
    console.log("Steam")
}
else if( tempreture < 0)
{
    console.log("Ice")
}
else
{
    console.log("Water")
}
rl.close();
});