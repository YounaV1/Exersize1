const readline = require('readline')
const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});
function Al(num)
{
    if(num == 1 || num == 0)
    {
        return 1;
    }
    return 2*Al(num-1)-Al(num-2)+3
}
while(true)
{
rl.question("Inter your number: ", function(input)
{
    const num = parseInt(input);
    console.log(Al(num))
});
rl.close()
}