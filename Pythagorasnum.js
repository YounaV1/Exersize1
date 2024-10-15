const readline = require('readline');
const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter 3 Number:", function(input)
{
const[x,y,z] = input.split(' ').map(Number);
const Asq=x*x;
const Bsq=y*y;
const Csq=z*z;
if(Asq+Bsq===Csq || Bsq+Csq===Asq || Asq+Csq===Bsq)
{
    console.log("YES");
}
else
{
    console.log("NO");
}

rl.close()
});