
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let result = null;

async function getPokemon(url) {
    const response = await fetch(url);

    if (response.ok){
        const data = await response.json();
        doStuff(data);
    }
    
}

async function getPokemonList(url) {
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        doStuffList(data);
    }
    
}
function doStuff(data) {
    results = data;
    const outputElement = document.querySelector("#output");
    const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}

function doStuffList(data) {
    console.log(data);

    const pokeListElement = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;

        pokeListElement.innerHTML += html;
    });

}