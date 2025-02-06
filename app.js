//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosNome = [];


function limpar() {
    let amigo = document.querySelector('input');
    amigo.value = ''; 

};
function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    //console.log('Campo vazio');
    //alert('Campo vazio');
    if(amigo == ''){
        alert('Campo Vazio');
        console.log(amigosNome);
        } else{
            amigosNome.push(amigo);
            console.log(amigosNome);
            limpar()
            addLista()
            return amigo;    
        };
      
};


function addLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let id = 0; id < amigosNome.length; id++){

        let item = document.createElement('li');
        item.textContent = amigosNome[id];
        lista.appendChild(item);
        }
};

function sortearAmigo(){
    if(amigosNome.length <= 2){
        alert('Você ainda precisa adicionar mais gente a lista!');
            } else {
                let indiceAleatorio = Math.floor(Math.random() * amigosNome.length);
                let sorteado = amigosNome[indiceAleatorio];
                limparLista();
                let resultado = document.getElementById('resultado');
                let amigoSorteado = document.createElement('li');
                amigoSorteado.textContent = sorteado;
                resultado.appendChild(amigoSorteado);
                
                return sorteado;
                
                }
        
};

function limparLista(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
    amigosNome.values = [];
}