var btn1=document.querySelector("#btn-translate");
var textArea=document.querySelector("#tarea1");

function click1(){
    console.log("You clicked!!")
    console.log("Your text is",textArea.value);
}

btn1.addEventListener("click", click1);