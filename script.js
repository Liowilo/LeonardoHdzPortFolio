document.addEventListener('DOMContentLoaded', function () {
    // Texto que deseas mostrar
    var text = "Leonardo Hdz";
    
    // Elemento del texto
    var typedText = document.getElementById('typed-text');
    
    // Establecer el texto inicialmente vacío
    typedText.textContent = "";
    
    // Mostrar cada letra después de un breve retraso
    for (var i = 0; i < text.length; i++) {
        setTimeout(function (index) {
            typedText.textContent += text[index];
        }, i * 150, i);
    }
});
