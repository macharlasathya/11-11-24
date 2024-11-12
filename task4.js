let name4=document.querySelector("input");
let msg=document.querySelector("p");

function checker()
{
if(name4.value.length <=4)
{
msg.textContent="week passwword";
}
else if(name4.value.length>=4 && name4.value.length<=10)
{
    msg.textContent="good password";
}
else
{
    msg.textContent="strong password";
}
}