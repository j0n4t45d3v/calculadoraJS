// Html
const input = document.createElement("input");
const input1 = document.createElement("input");
const btn = document.createElement("button");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const p = document.createElement("p");
const strong = document.createElement("strong");
p.textContent = "Resultado";
strong.appendChild(p)
btn.textContent = "+";
btn1.textContent = "-";
btn2.textContent = "/";
btn3.textContent = "x";
input.type = "number";
input1.type = "number";
input.placeholder = "Número1";
input1.placeholder = "Número2";

const div = document.createElement("div");
const div1 = document.createElement("div");
const sect = document.createElement("section");

div.appendChild(input);
div.appendChild(input1);
div1.appendChild(btn);
div1.appendChild(btn1);
div1.appendChild(btn2);
div1.appendChild(btn3);
sect.appendChild(strong);
sect.appendChild(div);
sect.appendChild(div1);
document.body.appendChild(sect);

// Css
// body
document.body.style.backgroundColor = "aqua";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "90vh";
// section
sect.style.display = "flex";
sect.style.height = "200px";
sect.style.width = "400px";
sect.style.flexDirection = "column";
sect.style.alignItems = "center";
sect.style.justifyContent = "center";
sect.style.backgroundColor = "white";
sect.style.borderRadius = "30px 10px";

// div
div1.style.display = "flex";
div1.style.transform = "scale(1.2)";
btn.style.transition = ".6s";
div1.style.marginTop= "5px";

// P
p.style.backgroundColor = "white";
p.style.border = "2px solid gray"
p.style.width = "365px"
p.style.color = "gray";
p.style.fontFamily = "arial"
p.style.textAlign = "center";
p.style.borderRadius = "10px";

// input
input.style.marginBottom = "5px";
input.style.borderRadius = "10px";
input1.style.borderRadius = "10px";
input.style.border = "2px solid gray";
input1.style.border = "2px solid gray";
// btn
btn.style.borderRadius = "50%";
btn.style.border = "2px solid gray";
btn1.style.borderRadius = "50%";
btn1.style.border = "2px solid gray";
btn2.style.borderRadius = "50%";
btn2.style.border = "2px solid gray";
btn3.style.borderRadius = "50%";
btn3.style.border = "2px solid gray";

// /javaScript
let resultado;

function soma(){
    const num1 = Number(input.value);
    const num2 = Number(input1.value);
    resultado = num1 + num2;

    p.textContent = resultado;
}
function subtrair(){
    const num1 = Number(input.value);
    const num2 = Number(input1.value);
    resultado = num1 - num2;

    p.textContent = resultado;
}
function dividir(){
    const num1 = Number(input.value);
    const num2 = Number(input1.value);
    resultado = num1 / num2;

    p.textContent = resultado;
}
function multiplicar(){
    const num1 = Number(input.value);
    const num2 = Number(input1.value);
    resultado = num1 * num2;

    p.textContent = resultado;
}

// Eventos de passar o mouse por cima dos botões
btn.addEventListener("mouseover",()=>{
    btn.style.transform = "scale(1.2)"
    btn.style.transition = ".6s";
});
btn.addEventListener("mouseout",()=>{
    btn.style.transform = "scale(1.0)"
    btn.style.transition = ".6s";
});

btn1.addEventListener("mouseover",()=>{
    btn1.style.transform = "scale(1.2)"
    btn1.style.transition = ".6s";
});
btn1.addEventListener("mouseout",()=>{
    btn1.style.transform = "scale(1.0)"
    btn1.style.transition = ".6s";
});
btn2.addEventListener("mouseover",()=>{
    btn2.style.transform = "scale(1.2)"
    btn2.style.transition = ".6s";
});
btn2.addEventListener("mouseout",()=>{
    btn2.style.transform = "scale(1.0)"
    btn2.style.transition = ".6s";
});
btn3.addEventListener("mouseover",()=>{
    btn3.style.transform = "scale(1.2)"
    btn3.style.transition = ".6s";
});
btn3.addEventListener("mouseout",()=>{
    btn3.style.transform = "scale(1.0)"
    btn3.style.transition = ".6s";
});

// Eventos de click dos botões

btn.addEventListener("click", soma);
btn1.addEventListener("click", subtrair);
btn2.addEventListener("click", dividir);
btn3.addEventListener("click", multiplicar);