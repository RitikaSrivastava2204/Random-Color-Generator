
let Color = document.querySelector(".color");

let Body1 = document.querySelector("body");
let Msg = document.querySelector(".msg p");
let Pallette = document.querySelector(".pallette");
let Reset = document.querySelector(".reset");
let CreateButton = document.querySelector(".create-btn");
let Red = document.querySelector(".red");
let Green = document.querySelector(".green");
let Blue = document.querySelector(".blue");


let resetFun = function(){
  Red.value = "";
  Green.value = "";
  Blue.value = "";
  Color.style.backgroundColor = "white";
  Body1.style.backgroundColor = "white";
  CreateButton.style.backgroundColor = "rgba(0, 110, 255)";
  Pallette.classList.add("white");
  console.log("reset");  
  Msg.textContent="";

}
let createFun = function(){
    if ((Red.value < 256 && Red.value >= 0) && (Green.value < 256 && Green.value >= 0) && (Blue.value < 256 && Blue.value >= 0)){

    let createdColor = `rgb(${Red.value},${Green.value},${Blue.value})`;
    console.log(createdColor);
    Color.style.backgroundColor = createdColor;
    Body1.style.backgroundColor = createdColor;
    Pallette.classList.remove("white");
    CreateButton.style.backgroundColor = createdColor;
    Msg.textContent="";
    }
    else{
        console.log("error");
        Msg.textContent = "Enter a Valid rgb code!";
    }
}

CreateButton.addEventListener("click",createFun);
Reset.addEventListener("click",resetFun);
