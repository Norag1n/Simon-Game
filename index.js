var round = 1;
var tlecado = false;

document.addEventListener('click', function(e) {
    if(tlecado == false){
        tlecado = true;
        var aleatorio = [Math.floor(Math.random()*(4 - 1 + 1) + 1)];
        Computador(aleatorio);
    }
});

function Computador(jogada){
    var titulo = document.getElementById("round");
    titulo.innerText = "Rodada "+round;
    var ordemJogo = [];
    ordemJogo = ordemJogo.concat(jogada);
    var testeC = [];
    testeC = testeC.concat(ordemJogo);
    if(ordemJogo.at(-1) == 1){
        ABG();
    }
    if (ordemJogo.at(-1) == 2){
        ABR();
    }
    if (ordemJogo.at(-1) == 3){
        ABY();
    }
    if (ordemJogo.at(-1) == 4){
        ABB();
    }
    for(var i = 0 ; ordemJogo.length >= i; i++){
        if(testeC[0] == 1){
            testeC.shift();
            if(testeC.length == 0){
                Jogo(ordemJogo);  
            }
        }if(testeC[0] == 2){

                testeC.shift();
                if(testeC.length == 0){
                    Jogo(ordemJogo);  
                }
        }if(testeC[0] == 3){

                testeC.shift();
                if(testeC.length == 0){
                    Jogo(ordemJogo);  
                }
        }if(testeC[0] == 4){

                testeC.shift();
                if(testeC.length == 0){
                    Jogo(ordemJogo);  
                }
        }

        
    }

}


function Jogo(jogadas){
    var audioErrado = new Audio("sounds/wrong.mp3");
    audioErrado.volume = 0.05;
    roundTeste = round;
    var verde = document.getElementById("verde");
    var azul = document.getElementById("azul");
    var amarelo = document.getElementById("amarelo");
    var vermelho = document.getElementById("vermelho");
    var titulo = document.getElementById("round");
    var melhor = document.getElementById("melhorResultado");
    var aleatorio = [];
    var teste = [];
    teste = teste.concat(jogadas);
    var errou = teste[0];
    aleatorio = [Math.floor(Math.random()*(4 - 1 + 1) + 1)]; 
    verde.addEventListener('click',clickVerde);
    vermelho.addEventListener('click',clickVermelho);
    amarelo.addEventListener('click',clickAmarelo);
    azul.addEventListener('click',clickAzul);
    function clickVerde(){
        if(teste[0] == 1){
            ABG();
            teste.shift();
            errou = teste[0];
            console.log(errou);
            if(teste.length == 0){
                round = round + 1;
                titulo.innerText = "Rodada " + round;
                if (round > roundTeste){
                    jogadas = jogadas.concat(aleatorio);
                    setTimeout(()=>{
                        Computador(jogadas);
                    },800);
                }
            }
        }else if(errou == 2 || errou == 3 || errou == 4){
            console.log(errou);
            audioErrado.play();
            melhor.innerText = "Você foi até a rodada: "+round;
            round = 1;
            jogadas = [];
            teste = [];
            errou = [];
            verde.removeEventListener('click',clickVerde);
            vermelho.removeEventListener('click',clickVermelho);
            amarelo.removeEventListener('click',clickAmarelo);
            azul.removeEventListener('click',clickAzul);
            titulo.innerText = "Você Errou!! Aperte na Tela para Recomeçar";
            tlecado = false;
        }
    }
    function clickVermelho(){
        if(teste[0] == 2){
            ABR();
            teste.shift();
            errou = teste[0];
            console.log(errou);
            if(teste.length == 0){
                round = round + 1;
                titulo.innerText = "Rodada "+round;
                if (round > roundTeste){
                    jogadas = jogadas.concat(aleatorio);
                    setTimeout(()=>{
                        Computador(jogadas);
                    },800);
                }
            }
        } else if(errou == 1 || errou == 3 || errou == 4){
            console.log(errou);
            audioErrado.play();
            melhor.innerText = "Você foi até a rodada: "+round;
            round = 1;
            jogadas = [];
            teste = [];
            errou = [];
            verde.removeEventListener('click',clickVerde);
            vermelho.removeEventListener('click',clickVermelho);
            amarelo.removeEventListener('click',clickAmarelo);
            azul.removeEventListener('click',clickAzul);
            titulo.innerText = "Você Errou!! Aperte na Tela para Recomeçar";
            tlecado = false;
        }
    }
    function clickAmarelo(){
        if(teste[0] == 3){
            ABY();
            teste.shift();
            errou = teste[0];
            console.log(errou);
            if(teste.length == 0){
                round = round + 1;
                titulo.innerText = "Rodada "+round;
                if (round > roundTeste){
                    jogadas = jogadas.concat(aleatorio);
                    setTimeout(()=>{
                        Computador(jogadas);
                    },800);
                }
            }
        }else if(errou == 1 || errou == 2 || errou == 4){
            console.log(errou);
            audioErrado.play();
            melhor.innerText = "Você foi até a rodada: "+round;
            round = 1;
            jogadas = [];
            teste = [];
            errou = [];
            verde.removeEventListener('click',clickVerde);
            vermelho.removeEventListener('click',clickVermelho);
            amarelo.removeEventListener('click',clickAmarelo);
            azul.removeEventListener('click',clickAzul);
            titulo.innerText = "Você Errou!! Aperte na Tela para Recomeçar";
            tlecado = false;
        }
    }  
    function clickAzul(){
        if(teste[0] == 4){
            ABB();
            teste.shift();
            errou = teste[0];
            console.log(errou);
            if(teste.length == 0){
                round = round + 1;
                titulo.innerText = "Rodada "+round;
                if (round > roundTeste){
                    jogadas = jogadas.concat(aleatorio);
                    setTimeout(()=>{
                        Computador(jogadas);
                    },800);
                }
            }
        }else if(errou == 1 || errou == 2 || errou == 3){
            console.log(errou);
            audioErrado.play();
            melhor.innerText = "Você foi até a rodada: "+round;
            round = 1;
            jogadas = [];
            teste = [];
            errou = [];
            verde.removeEventListener('click',clickVerde);
            vermelho.removeEventListener('click',clickVermelho);
            amarelo.removeEventListener('click',clickAmarelo);
            azul.removeEventListener('click',clickAzul);
            titulo.innerText = "Você Errou!! Aperte na Tela para Recomeçar";
            tlecado = false;
        }
    }     
}

function ABG(){
    var verde = document.getElementById("verde");
    var audioVerde = new Audio("sounds/green.mp3");
    audioVerde.volume = 0.1;
    verde.style.opacity = "0.7";
    audioVerde.play();
    setTimeout(() => {
        verde.style.opacity = "1";
    }, "500");
}

function ABR(){
    var vermelho = document.getElementById("vermelho");
    var audioVermelho = new Audio("sounds/red.mp3");
    audioVermelho.volume = 0.1;
    vermelho.style.opacity = "0.7";
    audioVermelho.play();
    setTimeout(() => {
        vermelho.style.opacity = "1";
    }, "500");
}


function ABY(){
    var amarelo = document.getElementById("amarelo");
    var audioAmarelo = new Audio("sounds/yellow.mp3");
    audioAmarelo.volume = 0.1;
    amarelo.style.opacity = "0.7";
    audioAmarelo.play();
    setTimeout(() => {
        amarelo.style.opacity = "1";
    }, "500");
}

function ABB(){
    var azul = document.getElementById("azul");
    var audioAzul = new Audio("sounds/blue.mp3");
    audioAzul.volume = 0.1;
    azul.style.opacity = "0.7";
    audioAzul.play();
    setTimeout(() => {
        azul.style.opacity = "1";
    }, "500");
}

