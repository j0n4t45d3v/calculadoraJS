const input = document.createElement("input");
const input1 = document.createElement("input");
const btn = document.createElement("button");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const btnEnviar = document.createElement("button");
const p = document.createElement("p");
p.textContent = "Resultado";
btn.textContent = "+";
btn1.textContent = "-";
btn2.textContent = "/";
btn3.textContent = "x";
btnEnviar.textContent = "Enviar";
input.type = "number"
input1.type = "number"

const div = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");

div.appendChild(input);
div.appendChild(input1);
div1.appendChild(btn);
div1.appendChild(btn1);
div1.appendChild(btn2);
div1.appendChild(btn3);
div1.appendChild(btnEnviar);
div2.appendChild(p);
document.body.appendChild(div);
document.body.appendChild(div1);
document.body.appendChild(div2);



function soma(num1, num2){
    return num1 + num2;
}
function subtrair(num1, num2){
    return num1 - num2;
}
function dividir(num1, num2){
    return num1 / num2;
}
function multiplicar(num1, num2){
    return num1 * num2;
}
function enviar(){
    const num1 = Number(input.value);
    const num2 = Number(input1.value);
    let resultado ; 

    p.textContent = resultado;

}
btnEnviar.addEventListener("click",enviar);