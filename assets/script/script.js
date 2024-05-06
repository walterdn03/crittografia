 // Funzione per costruire l'alfabeto
 function buildAlphabet() {
    const alphabetContainer = document.getElementById('alphabet');
    for (let i = 65; i <= 90; i++) { // Codici ASCII per le lettere da A a Z
        const letter = String.fromCharCode(i);
        const letterElement = document.createElement('span');
        letterElement.textContent = letter;
        letterElement.classList.add('letter');
        letterElement.addEventListener('mouseenter', () => selectLetter(letter));
        letterElement.addEventListener('mouseleave', () => deselectLetter(letter));
        alphabetContainer.appendChild(letterElement);
    }
}

// Funzione per selezionare una lettera
function selectLetter(letter) {
    // Rimuovi l'illuminazione del bordo da tutte le lettere
    document.querySelectorAll('.letter').forEach(element => {
        element.classList.remove('highlight');
    });

    // Calcola la lettera spostata di 3 posizioni
    const shiftedCharCode = letter.charCodeAt(0) + 3;
    const shiftedLetter = String.fromCharCode(shiftedCharCode > 90 ? shiftedCharCode - 26 : shiftedCharCode);

    // Evidenzia la lettera selezionata e quella corrispondente alla chiave di cifratura con il bordo illuminato
    const selectedLetterIndex = letter.charCodeAt(0) - 65;
    const shiftedLetterIndex = shiftedLetter.charCodeAt(0) - 65;
    document.querySelectorAll('.letter')[selectedLetterIndex].classList.add('highlight');
    document.querySelectorAll('.letter')[shiftedLetterIndex].classList.add('highlight');
}

// Funzione per deselezionare una lettera
function deselectLetter(letter) {
    // Rimuovi l'illuminazione del bordo
    document.querySelectorAll('.letter').forEach(element => {
        element.classList.remove('highlight');
    });
}

// Chiamata alla funzione per costruire l'alfabeto al caricamento della pagina
window.onload = buildAlphabet;