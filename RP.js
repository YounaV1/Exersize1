let rect=
{
    x:10,
    y:10,
    w:10,
    h:10
}
function point_on_rectangle(rect)
{
    return point=
    {
        x: rect.x+ Math.random()*rect.w,
        y: rect.y - Math.random()*rect.h
        
    }
}
for(i=1;i<=1;i++)
{
console.log(point_on_rectangle(rect));
}