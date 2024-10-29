const readline = require('readline')
const rl = readline.createInterface
({
    input: process.stdin,
    output:  process.stdout
});

// function fib(num){
//     if(num == 1 || num == 0)
//         {
//             return 1;
//         }
//         return fib(num-1)+ fib(num-2)        
// }

function fib(num){

}

rl.question("Inter the number you want to calculate to:  ",function(input)
{
    const num = parseInt(input);
    console.log(fib(num))
});
