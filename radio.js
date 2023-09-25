let musicas = [
    {titulo:'Asswer', artista:'Tyler the Creator', src:'music/Answer.m4a', img:'img/1.jpg'},
    {titulo:'Are We Still Friends?', artista:'Tyler The Creator', src:'music/TylerLindo.mp3', img:'img/2.jpg'},
    {titulo:'Best Interest', artista:'Tyler the Creator', src:'music/BEST INTEREST.m4a', img:'img/3.jpg'},
    {titulo:'Gone', artista:'Tyler the Creator', src:'music/gone.m4a', img:'img/6.jpg'},
    {titulo:'Hot Wind Blows', artista:'Tyler the Creator', src:'music/hot.m4a', img:'img/5.jpg'},
    {titulo:'See You Again', artista:'Tyler the Creator', src:'music/seeyou.m4a', img:'img/7.jpg'},
    {titulo:'Sorry not Sorry', artista:'Tyler the Creator', src:'music/sorry.m4a', img:'img/8.jpg'},
    {titulo:'New Magic', artista:'Tyler the Creator', src:'music/newmagic.m4a', img:'img/9.jpg'},
    {titulo:'Dogtooth', artista:'Tyler the Creator', src:'music/DOGTOOTH.m4a', img:'img/10.jpg'},
    {titulo:'IFHY', artista:'Tyler the Creator', src:'music/ifhhy.m4a', img:'img/11.jpg'}
];


let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');


renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 9;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 9){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

