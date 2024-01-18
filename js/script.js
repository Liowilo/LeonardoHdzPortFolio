document.addEventListener('DOMContentLoaded', function () {
    // Texto que deseas mostrar
    var text = "Tu Nombre";
    
    // Elementos del texto y la barra de cursor
    var typedText = document.getElementById('typed-text');
    var cursor = document.querySelector('.cursor');
    
    // Establecer el texto inicialmente vacío
    typedText.textContent = "";
    
    // Mostrar cada letra después de un breve retraso
    for (var i = 0; i < text.length; i++) {
        setTimeout(function (index) {
            typedText.textContent += text[index];
            if (index === text.length - 1) {
                // Si es la última letra, mover la barra de cursor al final
                moveCursor();
            }
        }, i * 150, i);
    }

    // Función para mover la barra de cursor al final del texto
    function moveCursor() {
        var lastLetter = typedText.lastElementChild;
        var lastLetterRect = lastLetter.getBoundingClientRect();
        
        // Posicionar la barra de cursor al final del texto
        cursor.style.top = lastLetterRect.top + 'px';
        cursor.style.left = lastLetterRect.right + 'px';
    }
});
