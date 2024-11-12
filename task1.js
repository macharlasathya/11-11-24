let name1=document.getElementById("color")
let name2=document.getElementById("Radius")
let Bike=document.querySelector("img")


function  colorchange(z){
console.log(z)

    if(z.key==="Enter")
    {
        document.body.style.backgroundColor=name1.value
    }
}

function BorderR(A)
{
    if(A.key==="Enter")
    {
        Bike.style.borderRadius=`${name2.value}px`;
    }
}