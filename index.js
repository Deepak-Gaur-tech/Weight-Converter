let input=document.querySelector("input");
let output=document.querySelector("#output");

input.addEventListener("input",()=>{
    let num=input.value;
    let dee=num*2.2;
    output.innerHTML=dee.toFixed(2);
})