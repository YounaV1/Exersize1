function range(start,end,step=1)
{
    let array= [];
    let j= 0;
    if(step>0)
    {
        for(let i= start; i<=end;i+=step)
        {
            array[j]=i;
            j++
        }
    }
    else
    {
        for(let i= start; i>=end;i+=step)
            {
                array[j]=i;
                j++
            }
    }
    return array;
}

function sum(array)
{
    let sizeofarray = array.length;
    let meghdar=0;
    for(let i=0; i < sizeofarray;i++)
    {
        meghdar += array[i];
    }
    return meghdar
}

console.log(sum(range(10,20,2)));