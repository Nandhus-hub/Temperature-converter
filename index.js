const textbox=document.getElementById("textbox");
const tofahrenheit=document.getElementById("tofahrenheit");
const tocelsius=document.getElementById("tocelsius");
const result=document.getElementById("result");
let temp;
const value=textbox.value;

function converter(){
    
    if(isNaN(value)||value.trim()===""){
        result.textContent="Enter a valid text";
        return;
    }
    
    if(tofahrenheit.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+" Fahrenheit";
    }
    else if(tocelsius.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/90);
        result.textContent=temp.toFixed(1)+" Celsius";
    }
    else{
        result.textContent="Select a unit";
    }
}