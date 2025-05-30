const botoes=document.querySelectorAll("botao");
console (botoes)

for(i=0; i<botoes.length; i++){
    botoes[i].onclick=function(){
        for(j=0; j<botoes.length; j++){
            botoes[j].classList.remove(ativo);

        }
        botoes[i].classList.add(ativo);
    }
}