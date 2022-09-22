// Html
const input = document.createElement("input");
const input1 = document.createElement("input");
const btn = document.createElement("button");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const p = document.createElement("p");
p.textContent = "Resultado";
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

div.appendChild(input);
div.appendChild(input1);
div1.appendChild(btn);
div1.appendChild(btn1);
div1.appendChild(btn2);
div1.appendChild(btn3);
document.body.appendChild(p);
document.body.appendChild(div);
document.body.appendChild(div1);

// Css
// body
document.body.style.backgroundColor = "aqua";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "90vh";
// Div
div.style.display = "flex";
div.style.flexDirection = "column";
div1.style.marginTop = "5px";


// P
p.style.backgroundColor = "white";
p.style.border = "1px solid black"
p.style.width = "175px"
p.style.color = "gray";
p.style.textAlign = "center";
p.style.borderRadius = "10px";

// input
input.style.marginBottom = "5px";
input.style.borderRadius = "10px";
input1.style.borderRadius = "10px";
// btn
btn.style.borderRadius = "50%";
btn.style.border = "1px solid gray";
btn1.style.borderRadius = "50%";
btn1.style.border = "1px solid gray";
btn2.style.borderRadius = "50%";
btn2.style.border = "1px solid gray";
btn3.style.borderRadius = "50%";
btn3.style.border = "1px solid gray";

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

btn.addEventListener("click", soma);
btn1.addEventListener("click", subtrair);
btn2.addEventListener("click", dividir);
btn3.addEventListener("click", multiplicar);