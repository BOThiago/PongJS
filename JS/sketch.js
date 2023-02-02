//Varíavel de estética
let imagemPong;

function preload(){
    imagemPong = loadImage("/images/ponground.png");
}

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

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

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

function draw() {
    background(imagemPong);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaRaquete();
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    verificaColisaoRaquete(xRaquete, yRaquete);
    limitaAreaRaquete(xRaquete, yRaquete)
    limitaAreaRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(0, 0, 255));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 0, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

/*function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha + 40 - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}*/

function movimentaRaqueteOponente(){
    if (keyIsDown(UP_ARROW)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaqueteOponente += 10;
    }
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function movimentaRaquete() {
    if (keyIsDown(87)){
        yRaquete -= 10;
    }
    if (keyIsDown(83)){
        yRaquete += 10;
    }
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0){
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
    }
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
    }
}

function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
      velocidadeXBolinha *= -1;
    }
  }

  function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
    }
}

function limitaAreaRaquete(x,y) {
    if (yRaquete < 0) {
        (keyIsDown(DOWN_ARROW))
            yRaquete = 0;
    }
    if (yRaquete > 310) {
        (keyIsDown(DOWN_ARROW))
            yRaquete = 310;
    }
}

function limitaAreaRaqueteOponente(x,y) {
    if (yRaqueteOponente < 0) {
        (keyIsDown(87))
            yRaqueteOponente = 0;
    }
    if (yRaqueteOponente > 310) {
        (keyIsDown(83))
            yRaqueteOponente = 310;
    }
}

/*async function recomecarJogo() {
    if (xBolinha < 10 || xBolinha > 590) {
        yBolinha = 200;
        xBolinha = 300;
        wait(5000); 
    } 
}*/