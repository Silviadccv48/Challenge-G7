const textInput = document.getElementById('textInput');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const noMessage = document.getElementById('noMessage');

const conversionMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

encryptBtn.addEventListener('click', () => {
    const text = textInput.value.toLowerCase();
    if (text.trim() === '') {
        noMessage.style.display = 'block';
        return;
    }
    outputText.value = encrypt(text);
    noMessage.style.display = 'none';
});

decryptBtn.addEventListener('click', () => {
    const text = textInput.value.toLowerCase();
    if (text.trim() === '') {
        noMessage.style.display = 'block';
        return;
    }
    outputText.value = decrypt(text);
    noMessage.style.display = 'none';
});

copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
});

function encrypt(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        encryptedText += conversionMap[char] || char;
    }
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        // Busca en el mapa la palabra encriptada correspondiente
        for (const [key, value] of Object.entries(conversionMap)) {
            if (text.substring(i, i + value.length) === value) {
                decryptedText += key;
                i += value.length - 1;
                break;
            }
        }
        // Si no encuentra una coincidencia, agrega el carácter original
        if (i < text.length) {
            decryptedText += char;
        }
    }
    return decryptedText;
}