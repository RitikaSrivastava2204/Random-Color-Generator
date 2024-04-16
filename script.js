let Name = document.querySelector(".name");
let Color = document.querySelector(".color");
let GenButton = document.querySelector(".gen-btn");
let Body = document.querySelector("body");
let Hex = document.querySelector(".hex");
let Pallette = document.querySelector(".pallette");
let Reset = document.querySelector(".reset");



let genFun = function () {
  let a = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  let c = Math.round(Math.random() * 256);
  let color = `rgb(${a},${b},${c})`;
  let hexColor = `${a.toString(16)}${b.toString(16)}${c.toString(16)}`;
  Name.textContent = color;
  Hex.textContent = `hex #${hexColor}`;
  Color.style.backgroundColor = color;
  Body.style.backgroundColor = color;
  GenButton.style.backgroundColor = color;
  Pallette.classList.remove("white");
  console.log(hexColor);  
};

let resetFun = function(){
  Name.textContent = "";
  Hex.textContent = "";
  Color.style.backgroundColor = "white";
  Body.style.backgroundColor = "white";
  GenButton.style.backgroundColor = "rgba(0, 110, 255)";
  Pallette.classList.add("white");
  console.log("reset");  

}

GenButton.addEventListener("click",genFun);
Reset.addEventListener("click",resetFun);


