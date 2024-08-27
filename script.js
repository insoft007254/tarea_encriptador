function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText); 
    document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    try {
        const decryptedText = atob(inputText); 
        document.getElementById('outputText').value = decryptedText;
    } catch (e) {
        document.getElementById('outputText').value = "Error: Texto inválido para desencriptar";
    }
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);
}

function clearFields() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}
