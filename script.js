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
input.type = "number"
input1.type = "number"
input.placeholder = "Número1"

const div = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");

div.appendChild(input);
div.appendChild(input1);
div1.appendChild(btn);
div1.appendChild(btn1);
div1.appendChild(btn2);
div1.appendChild(btn3);
div2.appendChild(p);
document.body.appendChild(div2);
document.body.appendChild(div);
document.body.appendChild(div1);

// Css
document.body.style.display = "flex";

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