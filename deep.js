function deepEqual(a,b)
{
    if(a === b)
        return true;
    if(a == null || b == null || typeof a !== "object" || typeof b !== "object" || typeof null == "object" )
        return false;

    let Akey= Objects.keys(a);
    let Bkey= Objects.keys(b);

    if(Akey.length !== Bkey.length)
        return false;
    for (let i = 0; i < Akey.length; i++)
    {
        const key = Akey[i];
        if(b[key] === undefined || !deepEqual(a[key], b[key]))
            return false;
    }
    return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));