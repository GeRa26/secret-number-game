//let title = document.querySelector('h1');
//title.innerHTML = 'Secret Number Gamer';

//let paragraph = document.querySelector('p');
//paragraph.innerHTML = 'Whrite any nymber between 1 a 100';
let listaDeNumerosSorteados = []
let numeroLimite = 100;
let randomNumber = creatRandomNumber();
let trys = 1;

function showTextOnScreen(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'UK English Female', {rate:1.2});
}

function exibirMensagemInicial(){
    showTextOnScreen('h1', 'Secret Number Gamer');
    showTextOnScreen('p', 'Whrite any nymber between 1 a 100');
}

exibirMensagemInicial();

function checkNumber() {
    let check = document.querySelector('input').value;
    if(check == randomNumber){
        showTextOnScreen('h1','You Win');
        let palavraTentativa = trys > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `voce descobriu com ${trys} ${palavraTentativa}`;
        showTextOnScreen('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{ 
        if(check > randomNumber){
            showTextOnScreen('p','the number is smaller than' + check);
        }else{
            showTextOnScreen('p','the number is bigger than' + '' + check);
        }
        trys++
        limparCampo();   
    }   


    //console.log(check == randomNumber);
    //console.log('the button was clicked');
    //console.log(randomNumber);
}

function creatRandomNumber() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; 

  if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = []
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return creatRandomNumber();
  }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.group(listaDeNumerosSorteados);
    return numeroEscolhido;  
  }
}

function limparCampo(){ 
    check = document.querySelector('input');
    check.value = '';
}

function reiniciarJogo(){
    randomNumber = creatRandomNumber();
    limparCampo();
    trys = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

