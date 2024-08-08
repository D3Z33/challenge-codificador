document.addEventListener('DOMContentLoaded', (event) => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const copyBtn = document.getElementById('copy-btn');

    const encrypt = (text) => {
        let encryptedText = text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        return encryptedText;
    };

    const decrypt = (text) => {
        let decryptedText = text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        return decryptedText;
    };

    const validateText = (text) => {
        return /^[a-z\s]*$/.test(text);
    };

    const showPopup = (message) => {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = message;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 2000); // O pop-up desaparece após 2 segundos
    };

    encryptBtn.addEventListener('click', () => {
        let text = inputText.value;
        if (validateText(text)) {
            outputText.textContent = encrypt(text);
            showPopup('Texto criptografado com sucesso!');
        } else {
            alert('Por favor, insira apenas letras minúsculas e sem acento.');
        }
    });

    decryptBtn.addEventListener('click', () => {
        let text = inputText.value;
        if (validateText(text)) {
            outputText.textContent = decrypt(text);
            showPopup('Texto descriptografado com sucesso!');
        } else {
            alert('Por favor, insira apenas letras minúsculas e sem acento.');
        }
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(outputText.textContent)
            .then(() => {
                showPopup('Texto copiado para a área de transferência!');
                inputText.value = '';
                outputText.textContent = 'Nenhuma mensagem encontrada';
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    });
});
