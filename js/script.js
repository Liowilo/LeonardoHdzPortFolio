document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-text', {
      strings: [
        '&lt;p&gt;Leonardo Hez&lt;/p&gt;', // Versión con error ortográfico
        '&lt;p&gt;Leonardo Hdz&lt;/p&gt;',
        '&lt;p&gt;Programador&lt;/p&gt;',
        '&lt;p&gt;Youtuber^-^&lt;/p&gt;',
        '&lt;p&gt;Leonardo Hdz&lt;/p&gt;',  // Versión corregida
      ],
      typeSpeed: 100,
      backSpeed: 60,
      startDelay: 500,
      backDelay: 1000,
      loop: false,
      showCursor: true,
      cursorChar: '|',
      cursorBlink: 530
    });
  });