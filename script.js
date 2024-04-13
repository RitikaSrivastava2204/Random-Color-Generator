let Name = document.querySelector(".name");
let Color = document.querySelector(".color");
let Button = document.querySelector(".btn");
let Body = document.querySelector("body");
let genFun = function () {
  let a = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  let c = Math.round(Math.random() * 256);
  let color = `rgb(${a},${b},${c})`;
  Name.textContent = color;
  Color.style.backgroundColor = color;
  Body.style.backgroundColor = color;
  Button.style.backgroundColor = color;
  
};
Button.addEventListener("click",genFun);


