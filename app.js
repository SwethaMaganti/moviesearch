
let api = 'https://www.omdbapi.com/?apikey=a28f66ee&t='

let title = document.getElementById('title');
let release = document.getElementById('release');
let director = document.getElementById('director');
let actor = document.getElementById('actor');
let genre = document.getElementById('genre');
let desc = document.getElementById('desc');
let collection = document.getElementById('collection');
let awards = document.getElementById('awards');
let writer = document.getElementById('writer');
let img = document.getElementById('img');
let imdbr = document.getElementById('imdbr');
let container = document.getElementById('container')
let loader = document.getElementById('loader')
container.classList.add('container-none');
loader.classList.add('container-none');

function Search(){
    loader.classList.remove('container-none');
    let moviename = document.getElementById('input-field');
    let query = api+moviename.value;
    fetch(query).then((data)=>{
        return data.json();
    }).then((data)=>{
        loader.classList.add('container-none');
        container.classList.remove('container-none');
        title.innerText = data.Title;
        release.innerText = data.Released;
            director.innerText = data.Director;
            actor.innerText = data.Actors;
            genre.innerText = data.Genre;
            desc.innerText = data.Plot;
            collection.innerText = data.BoxOffice;
            awards.innerText = data.Awards;
            writer.innerText = data.Writer;
            img.src = data.Poster;
            imdbr.innerHTML = data.imdbRating;
        console.log(data);
    })
}