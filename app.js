
const movieData = {
    "results": [
        {
            "backdrop_path": "/5jkE2SzR5uR2egEb1rRhF22JyWN.jpg",
            "id": 671,
            "original_language": "en",
            "original_title": "Harry Potter and the Philosopher's Stone",
            "overview": "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursley. Em seu aniversário de 11 anos ele recebe uma carta que mudará sua vida: um convite para ingressar em Hogwarts.",
            "popularity": 204.739,
            "poster_path": "/l1FfRmKRNXRSqXT5GlMo16MX2LX.jpg",
            "release_date": "2001-11-16",
            "title": "Harry Potter e a Pedra Filosofal",
            "vote_average": 7.9
        },
        {
            "backdrop_path": "/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
            "id": 672,
            "original_language": "en",
            "original_title": "Harry Potter and the Chamber of Secrets",
            "overview": "Carros voadores, árvores que lutam e um misterioso elfo, com um aviso ainda mais misterioso. Harry Potter está pronto para dar início ao segundo ano de sua maravilhosa jornada no mundo da bruxaria. Em Hogwarts nesse ano, aranhas falam, cartas dão broncas e a habilidade de Harry para falar com cobras voltará contra ele. De clubes de duelo a jogadores de quadribol desonestos, esse será um ano de aventura e perigo para todos. Quando a mensagem sangrenta na parede anuncia que a Câmara Secreta foi aberta, Harry, Rony e Hermione percebem que para salvar Hogwarts será preciso muita mágica e coragem. Confira essa enfeitiçante adaptação do segundo livro da obra da escritora J.K. Rowling e prepare-se para ficar petrificado quando Harry Potter demonstrar que, mais que um bruxo, é um verdadeiro herói.",
            "popularity": 187.903,
            "poster_path": "/811j0Jf2D0mK1U6RxXJoZgOB29n.jpg",
            "release_date": "2002-11-13",
            "title": "Harry Potter e a Câmara Secreta",
            "vote_average": 7.7
        },
        {
            "backdrop_path": "/vbk5CfaAHOjQPSAcYm6AoRRz2Af.jpg",
            "id": 673,
            "original_language": "en",
            "original_title": "Harry Potter and the Prisoner of Azkaban",
            "overview": "Quando a desprezível Tia Guida voa pelo céu na noite, Harry parte para o que será seu terceiro ano em Hogwarts. Um passeio no Nôitibus o leva para o Beco Diagonal onde ele fica sabendo que um prisioneiro foragido, Sirius Black está atrás dele. Em Hogwarts, Harry e seus amigos aprendem a delicada arte de se aproximar de um Hipogrifo, como transformar monstros em risadas e até mesmo a voltar no tempo. Dementadores sugadores de almas pairam sobre Hogwarts, ameaçando Harry, enquanto um seguidor de Aquele-Que-Não-Se-Deve-Nomear espreita pela escola. E Harry será forçado a confrontar todos eles. Dirigido por Alfonso Cuarón e baseado no terceiro livro de J.K. Rowling, essa maravilhosa história traz risadas, suspense e surpresas de tirar o fôlego, a especialidade dos filmes de Harry Potter. Prepare-se!",
            "popularity": 166.85,
            "poster_path": "/1HdMUghqlgOIvbsU9ZtO40IPRzl.jpg",
            "release_date": "2004-05-31",
            "title": "Harry Potter e o Prisioneiro de Azkaban",
            "vote_average": 8
        }
    ]
}

const movieDataL = {
    "budget": 0,
    "id": 986424,
    "imdb_id": "tt15223452",
    "original_language": "en",
    "original_title": "TikTok",
    "overview": "it's the social media app which has come to define our perceptimbedded itself within the covid-era zeitgeist. ",
    "popularity": 0.0,
    "poster_path": null,
    "release_date": "",
    "revenue": 0,
    "runtime": 43,
    "status": "Released",
    "tagline": "",
    "title": "TikTok",
    "vote_average": 0.0,
    "vote_count": 0
}

const showMoviesP = (data) => {
    let movieData = JSON.parse(data.target.response);
    localStorage.setItem('db-moviesP', data.target.response);

    let title1HTML = '';
    title1HTML += `
    <div class="row">
        <h1 class="section-title col-12"><b>Popular Movies</b></h1>
    </div>
    `;

    let dataHTML = '';
    for (let i = 0; i < movieData.results.length; i++) {
        let filme = movieData.results[i];
        dataHTML += `
            <div class="card col-lg-3 col-md-6 col-sm-12 loadp">
                <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" class="card-img-top" alt="Filme XPTO">
                    <div class="card-body">
                        <h5 class="card-title">${filme.title}</h5>
                        <p class="card-text">${filme.overview}</p>
                        <a href="detalhes.html?id=${filme.id}" class="btn btn-primary flex-btn"><b>Saiba +</b></a>
                    </div>
            </div>
        `;
    }
    document.getElementById("divPopularMovies").innerHTML = title1HTML + dataHTML;
}

const showMoviesL = (data) => {
    let movieDataL = JSON.parse(data.target.response);
    localStorage.setItem('db-moviesL', data.target.response);

    let title2HTML = '';
    title2HTML += `
        <h1 class="section-title col-12"><b>Latest Movie</b></h1>
    `;
    let dataHTMLP = '';
    //No poster
    if (movieDataL.poster_path == null) {
        dataHTMLP += `
        <div id="cardLm" class="card col-12">
        <img src="https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png" class="card-img-top" alt="Filme XPTO">
       `
    }
    else {
        dataHTMLP += `
        <div id="cardLm" class="card col-12">
        <img src="https://image.tmdb.org/t/p/w500/${movieDataL.poster_path}" class="card-img-top" alt="Filme XPTO">
       `
    }
    //No overview
    if (movieDataL.overview == "") {
        movieDataL.overview = "Sem detalhes sobre esse cadastro"
    }
    let dataHTML2 = '';
    dataHTML2 += `

                    <div class="card-body">
                        <h5 class="card-title">${movieDataL.title}</h5>
                        <p class="card-text lmtext">${movieDataL.overview}</p>
                        <a href="detalhes.html?id=${movieDataL.id}" class="btn btn-primary"><b>Saiba +</b></a>
                    </div>
            </div>
        `;
    document.getElementById("divLatestMovies").innerHTML = title2HTML+ dataHTMLP + dataHTML2;

}

const showMoviesNP = (data) => {
    let movieData = JSON.parse(data.target.response);
    localStorage.setItem('db-moviesNP', data.target.response);

    let title3HTML = '';
    title3HTML += `
    <div class="row">
        <h1 class="section-title col-12"><b>Now Playing</b></h1>
    </div>
    `;

    let dataHTML = '';
    for (let i = 0; i < movieData.results.length; i++) {
        let filme = movieData.results[i];
        dataHTML += `
            <div class="card col-lg-3 col-md-6 col-sm-12 loadnp">
                <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" class="card-img-top" alt="Filme XPTO">
                    <div class="card-body">
                        <h5 class="card-title">${filme.title}</h5>
                        <p class="card-text">${filme.overview}</p>
                        <a href="detalhes.html?id=${filme.id}" class="btn btn-primary"><b>Saiba +</b></a>
                    </div>
            </div>
        `;
    }
    document.getElementById("divNowPlaying").innerHTML = title3HTML + dataHTML;
}

const showError = (data) => {
    alert('Erro na Requisicao!!');
}

const init = () => {

    let xhrP = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=b4c158f933b8e1c89d7f255ffaacf6d1&language=pt-BR";
    xhrP.onload = showMoviesP;
    xhrP.onerror = showError;
    xhrP.open('GET', url, true);
    xhrP.send();

    let xhrL = new XMLHttpRequest();
    url = "https://api.themoviedb.org/3/movie/latest?api_key=b4c158f933b8e1c89d7f255ffaacf6d1&language=pt-BR";
    xhrL.onload = showMoviesL;
    xhrL.onerror = showError;
    xhrL.open('GET', url, true);
    xhrL.send();

    let xhrNP = new XMLHttpRequest();
    url = "https://api.themoviedb.org/3/movie/now_playing?api_key=b4c158f933b8e1c89d7f255ffaacf6d1&language=pt-BR";
    xhrNP.onload = showMoviesNP;
    xhrNP.onerror = showError;
    xhrNP.open('GET', url, true);
    xhrNP.send();
}
document.body.onload = init;


//Seearch Bar
var sc = document.getElementById("formulario");
sc.onsubmit = (event) => {
    event.preventDefault();
    var typed = document.getElementById("search").value;
    console.log(typed);
    location.href = `pesquisa.html?query=${typed}`;
}
//Load More Populars
let loadP = document.querySelector('#load_more_p');
let currentPop = 4;
loadP.onclick = () => {
    let boxesPop = [...document.querySelectorAll('.loadp')];
    for (var ipop = currentPop; ipop < currentPop + 4; ipop++) {
        boxesPop[ipop].style.display = 'block';
    }
    currentPop += 4;

    if (currentPop >= boxesPop.length) {
        loadP.style.display = 'none'
    }
}
//Load More Now PLaying
let loadNP = document.querySelector('#load_more_np');
let currentNP = 4;
loadNP.onclick = () => {
    let boxesNP = [...document.querySelectorAll('.loadnp')];
    for (var iNP = currentNP; iNP < currentNP + 4; iNP++) {
        boxesNP[iNP].style.display = 'block';
    }
    currentNP += 4;

    if (currentNP >= boxesNP.length) {
        loadNP.style.display = 'none'
    }
}

