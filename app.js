// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre === ''){
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
    }
    listarAmigos();
}

function listarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    limpiarListado();
    for (let i=0; i<amigos.length; i++){
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    limpiarListado();
    if (amigos.length == 0){
        alert('Por favor, inserte un nombre antes de sortear.');
    } else {
        let indice = Math.floor(Math.random()*amigos.length);
        document.getElementById('resultado').innerHTML = `${amigos[indice]}`
    }
}

function limpiarListado(){
    listaAmigos.innerHTML = '';
}