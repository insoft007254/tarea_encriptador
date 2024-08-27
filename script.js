// Selección de elementos
const encryptText = document.getElementById("inputText");
const encryptResultText = document.getElementById("outputText");
const btnCopy = document.querySelector(".copy-button");

// Expresiones regulares para detectar acentos y mayúsculas
const regexAcentos = /[ÁÉÍÓÚáéíóú]/;
const regexMayusculas = /[A-Z]/;

// Función para encriptar
const encryptFun = () => {
    const value = encryptText.value;
    
    const tieneAcentos = regexAcentos.test(value);
    const tieneMayusculas = regexMayusculas.test(value);

    // Verifica que no tenga acentos o mayúsculas
    if (!tieneAcentos && !tieneMayusculas) {
        const text = encryptText.value.split('');
        const textEncrypted = text.map(letra => {
            return pattern.hasOwnProperty(letra) ? pattern[letra] : letra;
        }).join('');
    
        encryptResultText.value = textEncrypted;
    } else {
        alert("Su mensaje tiene acentos o mayúsculas!");
    }
};

// Función para desencriptar
const decryptFun = (string) => {
    return string.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
};

// Botones y eventos
document.querySelector("button:nth-of-type(1)").onclick = encryptFun; // Encriptar
document.querySelector("button:nth-of-type(2)").onclick = () => {
    if (encryptResultText.value === '' && encryptText.value.length !== 0) {
        encryptText.value = decryptFun(encryptText.value);
    } else {
        encryptResultText.value = decryptFun(encryptResultText.value);
    }
}; // Desencriptar

document.querySelector("button:nth-of-type(3)").onclick = () => {
    encryptText.value = '';
    encryptResultText.value = '';
}; // Limpiar

btnCopy.onclick = () => {
    navigator.clipboard.writeText(encryptResultText.value);
    encryptResultText.value = '';
}; // Copiar Texto

// Patrones de encriptación
const pattern = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};

// Inicialización de estado
encryptText.addEventListener("input", () => {
    if (encryptText.value.trim() === '') {
        encryptResultText.style.display = "none";
        btnCopy.setAttribute('disabled', 'true');
    } else {
        encryptResultText.style.display = "block";
        btnCopy.removeAttribute('disabled');
    }
});
