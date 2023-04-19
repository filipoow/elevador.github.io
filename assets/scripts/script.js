document.addEventListener("DOMContentLoaded", function() {
    var botoes = document.querySelectorAll(".botao");
  
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].addEventListener("click", function() {
        // remove a borda vermelha de todos os botões
        for (var j = 0; j < botoes.length; j++) {
          botoes[j].classList.remove("borda-clique");
        }
        // adiciona a borda vermelha apenas ao botão clicado
        this.classList.add("borda-clique");
      });
    }
  });
  