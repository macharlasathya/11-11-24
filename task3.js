let icons=document.querySelector("i")

icons.onclick=function ()
{
    if(icons.className==="fa-solid fa-sun")
    {
        icons.className="fa-solid fa-moon"
         document.body.style.backgroundColor="gray";
         document.body.style.color="white";
    }else{
        icons.className="fa-solid fa-sun"
        document.body.style.backgroundColor="white";
         document.body.style.color="black";
    }
}