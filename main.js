const botoes = document.querySelectorAll("botao");
const textos = document.querySelectorAll(".abas-conteudo");
console (botoes)

for(i=0;i<botoes.length; i++){
    botoes[i].onclick = function(){
        for(j=0; j<botoes.length; j++){
            botoes[j].classList.remove(ativo);
            textos[j].classList.remove(ativo);
        }
        botoes[i].classList.add(ativo);
    }
}