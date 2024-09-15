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

  document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("g6j1fvvaHSN371KtS"); // Reemplaza con tu User ID de EmailJS

    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      emailjs.sendForm('service_l7minui', 'template_l5yzmw8', this)
        .then(function () {
          console.log('SUCCESS!');
          alert('Mensaje enviado con éxito!');
          form.reset(); // Limpia el formulario después de enviar
        }, function (error) {
          console.log('FAILED...', error);
          alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
        });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
  // URL de tu CV en PDF
  var url = './img/CV_Leonardo.pdf';

  // Configuración de PDF.js
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.min.js';

  var pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    scale = 1.5;

  function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then(function (page) {
      var viewport = page.getViewport({ scale: scale });
      var canvas = document.getElementById('pdf-render');
      var ctx = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      var renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };
      var renderTask = page.render(renderContext);

      renderTask.promise.then(function () {
        pageRendering = false;
        if (pageNumPending !== null) {
          renderPage(pageNumPending);
          pageNumPending = null;
        }
      });
    });

    document.getElementById('page-num').textContent = num;
  }

  function queueRenderPage(num) {
    if (pageRendering) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  }

  function onPrevPage() {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  }

  function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    queueRenderPage(pageNum);
  }

  function zoomIn() {
    scale *= 1.2;
    renderPage(pageNum);
  }

  function zoomOut() {
    scale /= 1.2;
    renderPage(pageNum);
  }

  pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
    pdfDoc = pdfDoc_;
    document.getElementById('page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);

    document.getElementById('prev').addEventListener('click', onPrevPage);
    document.getElementById('next').addEventListener('click', onNextPage);
    document.getElementById('zoom-in').addEventListener('click', zoomIn);
    document.getElementById('zoom-out').addEventListener('click', zoomOut);
  })
});

document.addEventListener('DOMContentLoaded', function() {
    const pdfLinks = document.querySelectorAll('a[data-pdf="true"]');
    
    pdfLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const pdfUrl = this.href;
        const viewerUrl = 'https://mozilla.github.io/pdf.js/web/viewer.html?file=';
        window.open(viewerUrl + encodeURIComponent(pdfUrl), '_blank');
      });
    });
  });