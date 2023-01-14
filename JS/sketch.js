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

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let ponto;
let raquetada;
let trilha;

//Funções do jogo
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    movimentaBolinha();
    mostraBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);;
    movimentaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    limitaAreaRaquete();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    recomecarJogo();
    bolinhaNaoFicaPresa();
    incluiPlacar();
    marcaPonto();
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

function mostraRaquete(x,y){
    rect(x, y, raqueteComprimento, 
        raqueteAltura);
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

/*function verificaColisaoRaquete(x, y){
    colidiu = collideRectCircle(x, y,raqueteComprimento,raqueteAltura,
    xBolinha,yBolinha,raio);
    if (colidiu){
      velocidadeXBolinha *= -1;
      raquetada.play();
    }
}*/

function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
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

function marcaPonto(){
    if (xBolinha > 590){
      meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < 10){
      pontosDoOponente += 1;
      ponto.play();
    }
}

async function recomecarJogo() {
    if (xBolinha < 10 || xBolinha > 590) {
        yBolinha = 200;
        xBolinha = 300;
        wait(5000); 
        } 
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
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

  let chanceDeErrar = 0;

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}