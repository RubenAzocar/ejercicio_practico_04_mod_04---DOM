// 1. Repetidor de Palabras
const btnRepetir = document.getElementById('btnRepetir');
const inputPalabra = document.getElementById('palabra');
const inputCantidad = document.getElementById('cantidad');
const resultadoRepetir = document.getElementById('resultadoRepetir');

btnRepetir.onclick = function() {
    const palabra = inputPalabra.value;
    const cantidad = parseInt(inputCantidad.value);

    if (palabra && !isNaN(cantidad)) {
        resultadoRepetir.innerText = palabra.repeat(cantidad);
    } else {
        resultadoRepetir.innerText = "Por favor, ingresa una palabra y una cantidad válida.";
    }
};

// 2. Cambio de Color de Fondo
const btnColor = document.getElementById('btnColor');
const selectorColor = document.getElementById('selectorColor');
const textoEjemplo = document.getElementById('textoEjemplo');

btnColor.onclick = function() {
    textoEjemplo.style.backgroundColor = selectorColor.value;
};

// 3. Calculadora Básica
const btnCalcular = document.getElementById('btnCalcular');
const inputNum1 = document.getElementById('num1');
const inputNum2 = document.getElementById('num2');

const spanSuma = document.getElementById('suma');
const spanResta = document.getElementById('resta');
const spanMulti = document.getElementById('multi');
const spanDivi = document.getElementById('divi');
const spanTotal = document.getElementById('total');

btnCalcular.onclick = function() {
    const n1 = parseFloat(inputNum1.value);
    const n2 = parseFloat(inputNum2.value);

    if (!isNaN(n1) && !isNaN(n2)) {
        const suma = n1 + n2;
        const resta = n1 - n2;
        const multi = n1 * n2;
        const divi = n2 !== 0 ? (n1 / n2) : "Error (División por 0)";

        spanSuma.innerText = suma;
        spanResta.innerText = resta;
        spanMulti.innerText = multi;
        spanDivi.innerText = divi;

        if (typeof divi === 'number') {
            spanTotal.innerText = suma + resta + multi + divi;
        } else {
            spanTotal.innerText = suma + resta + multi;
        }
    } else {
        alert("Por favor, ingresa números válidos.");
    }
};

// 4. Inversor de Texto
const btnInvertir = document.getElementById('btnInvertir');
const inputTextoInvertir = document.getElementById('textoInvertir');
const resultadoInverso = document.getElementById('resultadoInverso');

btnInvertir.onclick = function() {
    const texto = inputTextoInvertir.value;
    const invertido = texto.split('').reverse().join('');
    resultadoInverso.innerText = invertido;
};
