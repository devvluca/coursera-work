// Função para ativar a navegação suave
function smoothScroll(target) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 500; // Tempo de animação em milissegundos
  
    var scrollAnimation = setInterval(function() {
      var currentPosition = window.pageYOffset;
      var progress = (currentPosition - startPosition) / distance;
      if (progress >= 1) {
        clearInterval(scrollAnimation);
        window.scrollTo(0, targetPosition);
      } else {
        window.scrollTo(0, currentPosition + (progress * distance));
      }
    }, duration / 100); // Intervalo de atualização da animação em milissegundos
  }
  
  // Adicionar evento de clique aos links da navbar
  var navbarLinks = document.querySelectorAll(".menu li a");
  for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function(e) {
      e.preventDefault();
      var target = this.getAttribute("href");
      smoothScroll(target);
    });
  }
  
  // Adicionar outros scripts aqui, como animações, validação de formulários etc.
  
