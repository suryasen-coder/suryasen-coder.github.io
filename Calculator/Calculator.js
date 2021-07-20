function dis(val)
{
document.getElementById("edu").value+=val;   
 }
//function for evaluation
function solve()
{
let x = document.getElementById("edu").value;
let y = eval(x)
document.getElementById("edu").value = y
if(y===undefined){
    alert("Give an input.");
    alert("Access Denied!")
}
if(y===Infinity){
    alert("E::RR::OR")
}
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = ""
}
function backspace(){
    document.getElementById("edu").value = document.getElementById("edu").value.slice(0, -1)
}