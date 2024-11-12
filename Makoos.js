function reverseArray(array)
{
let newarray = [];
let j=0;
for(let i= array.length-1;i>=0;i--)
{
    newarray[j]=array[i];
    j++
}
return newarray;
}
function reverseArrayInPlace(array)
{
    let startindex=0;
    let endindex= array.length-1;
    while(startindex<endindex)
    {
        let zhakhire= array[startindex];
        array[startindex]= array[endindex];
        array[endindex]=zhakhire;
        startindex++;
        endindex--;
    }
    return array;
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
