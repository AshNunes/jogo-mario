function resete() 
{
    window.location.reload()
     console.log("FUNFOU!!!");
}

window.addEventListener("load", function A() {
  const player = document.getElementById("player");
  let x = 0;
  let y = 0;
  let isJumping = false;

  window.addEventListener("keydown", function B(event) {
      switch (event.keyCode) {
          case 37:
              x = x - 10;
              player.style.left = x + "px";
              break;
          case 39:
              x = x + 10;
              player.style.left = x + "px";
              break;
          case 38:
              if (!isJumping) { 
                  isJumping = true;
                  let jumpHeight = -20;
                  let jumpInterval = setInterval(function () {
                      if (y > jumpHeight) {
                          y -= 10;
                          player.style.top = y + "px";
                      } else {
                          clearInterval(jumpInterval);
                          // descida do pulo
                          let fallInterval = setInterval(function () {
                              if (y < 220) {
                                  y += 10;
                                  player.style.top = y + "px";
                              } else {
                                  clearInterval(fallInterval);
                                  isJumping = false;
                              }
                          }, 15); // Intervalo de descida
                      }
                  }, 15); // Intervalo de subida
              }
              break;
      }
      
      //área de interação com a borda {
        
        if (y >= 210) {
          y = 210;
                    
        } else if (y == -310) {
          y = 340;
                    
        }
        else if (x >= 10) {
          x = 10;
        }
        else if (x <= -10) {
          x = -10;
        }
                
      //fim da área de interação com a borda }
                  
  });
});
                  
                  
      function atualizarPontuacao() {
      var pontuacaoElemento = document.getElementById("pts");
      var pontuacaoAtual = parseInt(pontuacaoElemento.textContent);
      var novaPontuacao = pontuacaoAtual + 1;
      pontuacaoElemento.textContent = novaPontuacao;

    }

  setInterval(atualizarPontuacao, 1500);