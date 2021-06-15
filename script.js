const NumeroMaximo = 671;
const button = document.querySelector ('button');
const nomeDoPersonagem1 = document.querySelector('#nome-personagem1');
const imagem1 = document.querySelector ('#imagem1');
const nomeDaEspecie1 = document.querySelector ('#especie1');
const nomeDoPersonagem2 = document.querySelector('#nome-personagem2');
const imagem2 = document.querySelector ('#imagem2');
const nomeDaEspecie2 = document.querySelector ('#especie2');
const nomeDoPersonagem3 = document.querySelector('#nome-personagem3');
const imagem3 = document.querySelector ('#imagem3');
const nomeDaEspecie3 = document.querySelector ('#especie3');
const nomeDoPersonagem4 = document.querySelector('#nome-personagem4');
const imagem4 = document.querySelector ('#imagem4');
const nomeDaEspecie4 = document.querySelector ('#especie4');

let NomeDoPersonagem1
let NomeDoPersonagem2
let NomeDoPersonagem3
let NomeDoPersonagem4
let arrayPersonagens = []

GerarNumero = () => {
    let valorRandom;

    valorRandom = Math.floor (Math.random () * NumeroMaximo);

    if (arrayPersonagens.includes(valorRandom)) {
        valorRandom = GerarNumero();            
    }

    if (!arrayPersonagens.includes(valorRandom)) {
        arrayPersonagens.push(valorRandom);
    }

    return valorRandom;
}

pegarPersonagem1 = () => {
    const id = GerarNumero();
    
    return fetch (`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }) .then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = 'Imagem do Personagem' + data.name; 
        nomeDoPersonagem1.innerHTML = data.name;
        nomeDaEspecie1.innerHTML = data.species;
    })
}
pegarPersonagem2 = () => {
    const id = GerarNumero();
    
    return fetch (`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }) .then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = 'Imagem do Personagem' + data.name; 
        nomeDoPersonagem2.innerHTML = data.name;
        nomeDaEspecie2.innerHTML = data.species;
    })
}
pegarPersonagem3 = () => {
    const id = GerarNumero();
    
    return fetch (`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }) .then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = 'Imagem do Personagem' + data.name; 
        nomeDoPersonagem3.innerHTML = data.name;
        nomeDaEspecie3.innerHTML = data.species;
    })
}
pegarPersonagem4 = () => {
    const id = GerarNumero();
    
    return fetch (`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }) .then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        imagem4.alt = 'Imagem do Personagem' + data.name; 
        nomeDoPersonagem4.innerHTML = data.name;
        nomeDaEspecie4.innerHTML = data.species;
    })
}


button.onclick = function() {
    pegarPersonagem1();
    pegarPersonagem2();
    pegarPersonagem3();
    pegarPersonagem4();
    arrayPersonagens = [];
}

window.onload = function() {
    pegarPersonagem1();
    pegarPersonagem2();
    pegarPersonagem3();
    pegarPersonagem4();
    arrayPersonagens = [];}
