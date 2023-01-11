
//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Funções do jogo
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    movimentaBolinha();
    mostraBolinha();
    verificaColisaoBorda();
    mostraRaquete();
    movimentaRaquete();
    verificaColisaoRaquete();
    limitaAreaRaquete();
    recomecarJogo();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0){
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
    }
}

function movimentaRaquete() {
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento &&
        yBolinha - raio < yRaquete + raqueteAltura &&
        yBolinha + raio > yRaquete){
        velocidadeXBolinha *= -1;
    }
}

function limitaAreaRaquete() {
    if (yRaquete < 0) {
        (keyIsDown(DOWN_ARROW))
            yRaquete = 0;
    }
    if (yRaquete > 310) {
        (keyIsDown(DOWN_ARROW))
            yRaquete = 310;
    }
}

async function recomecarJogo() {
    if (xBolinha < 10 || xBolinha > 590) {
        yBolinha = 200;
        xBolinha = 300;
        wait(5000); 
        } 
}

/*async function f1() {
    var x = await tempoDeEspera(10);
}
f1();

function tempoDeEspera(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
        if (xBolinha < 10) {
            xBolinha = 300;
        } 

        if (xBolinha < 10) {
            yBolinha = 200;
        }
      }, 2000); 
    });
  }*/