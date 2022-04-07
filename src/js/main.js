import { alphabeticalFilter, calculos, rarityFilter, regionFilter, searchName, sizeFilter, typeFilter } from './data.js';
import data from '../data/pokemon/pokemon.js';

const allPokemons = data.pokemon;
const shinyUrlImg = "https://www.serebii.net/pokemongo/pokemon/shiny/";

let selectType = document.getElementById('typeFilter');
let selectRarity = document.getElementById('rarityFilter');
let selectRegion = document.getElementById('regionFilter');
let selectOrder = document.getElementById('orderFilter');
let inputName = document.getElementById('nameFilter');
let clearButton = document.getElementById('clearButton');
let calculationBar = document.getElementById('calculation');
let buttonTop = document.getElementById('buttonTop');

function translate(type) {
  let translatedType = "";
  switch (type) {
    case "water":
      translatedType = "Água";
      break;
    case "dragon":
      translatedType = "Dragão";
      break;
    case "electric":
      translatedType = "Elétrico";
      break;
    case "ghost":
      translatedType = "Fantasma";
      break;
    case "fire":
      translatedType = "Fogo";
      break;
    case "ice":
      translatedType = "Gelo";
      break;
    case "bug":
      translatedType = "Inseto";
      break;
    case "fighting":
      translatedType = "Lutador";
      break;
    case "normal":
      translatedType = "Normal";
      break;
    case "rock":
      translatedType = "Pedra";
      break;
    case "grass":
      translatedType = "Planta";
      break;
    case "psychic":
      translatedType = "Psíquico";
      break;
    case "ground":
      translatedType = "Terra";
      break;
    case "poison":
      translatedType = "Venenoso";
      break;
    case "flying":
      translatedType = "Voador";
      break;
  }
  return translatedType;
}

function showPokemon(data) {
  const allCards = data.map((item) => `
    <div class="cards">
      <section class="front-cards" id="frontCards">
        <p class="numberPokemon">${item.num}</p>
        <picture>
          <img class="image-card" src="${item.img}" alt="imagem do Pokémon" loading = "lazy">
        </picture>
        <div class="info-cards">
          <p class="namePokemon">${item.name}</p>
          <p class="typePokemon"> <b>Tipo:</b> ${item.type.map(element => {
            return translate(element)
            })}
          </p>
          <p class="regionPokemon"> <b>Região:</b> ${item.generation["name"]}</p>
        </div>
      </section>
    </div>
  `).join('')
    document.getElementById('pokemonList').innerHTML = allCards;
}

function showPokemonShiny(data) {
  const allCards = data.map((item) => `
    <div class="cards">
      <section class="front-cards" id="frontCards">
        <p class="numberPokemon">${item.num}</p>
        <picture>
          <img class="image-card" src="${shinyUrlImg}${item.img.slice(42,50)}" alt="imagem do Pokémon" loading = "lazy">
        </picture>
        <div class="info-cards">
          <p class="namePokemon">${item.name}</p>
          <p class="typePokemon"> <b>Tipo:</b> ${item.type.map(element => {
            return translate(element)
            })}
          </p>
          <p class="regionPokemon"> <b>Região:</b> ${item.generation["name"]}</p>
        </div>
      </section>
    </div>
  `).join('')
    document.getElementById('pokemonList').innerHTML = allCards;
}



function searchByType(e) {
  const resultEspecie = typeFilter(allPokemons, e.target.value)
  calculationBar.innerHTML = `Este tipo de pokémon representa ${calculos(allPokemons.length, resultEspecie.length)}% 
        do total`
  return showPokemon(resultEspecie)
}

function searchByRarity(e) {
  if (e.target.value == "shiny") {
    return showPokemonShiny(allPokemons)
  } else {
    const resultRarity = rarityFilter(allPokemons, e.target.value)
    calculationBar.innerHTML = `Esta raridade de pokémon representa ${calculos(allPokemons.length, resultRarity.length)}% 
        do total`
  return showPokemon(resultRarity)
  }
  
}

function searchByRegion(e) {
  const resultRegion = regionFilter(allPokemons, e.target.value)
  calculationBar.innerHTML = `${calculos(allPokemons.length, resultRegion.length)}% dos Pokémons pertencem a esta região`
  return showPokemon(resultRegion)
}

function searchByOrderAlphabetical() {
  if (selectOrder.value == "a-z") {
    calculationBar.innerHTML = `Pokémons ordenados de A à Z`
    return showPokemon(alphabeticalFilter(allPokemons, selectOrder.value))
  } else if (selectOrder.value == "z-a") {
    calculationBar.innerHTML = `Pokémons ordenados de Z à A`
    return showPokemon(alphabeticalFilter(allPokemons, selectOrder.value))
  }
}

function searchByHeightOrder() {
  if (selectOrder.value == "shortHigh") {
    calculationBar.innerHTML = `Pokémons ordenados do mais baixo para o mais alto`
    return showPokemon(sizeFilter(allPokemons, "height", selectOrder.value))
  } else if (selectOrder.value == "highShort") {
    calculationBar.innerHTML = `Pokémons ordenados do mais alto para o mais baixo`
    return showPokemon(sizeFilter(allPokemons, "height", selectOrder.value))
  }
}

function searchByWeightOrder() {
  if (selectOrder.value == "lightHeavy") {
    calculationBar.innerHTML = `Pokémons ordenados do mais leve para o mais pesado`
    return showPokemon(sizeFilter(allPokemons, "weight", selectOrder.value))
  } else if (selectOrder.value == "heavyLight") {
    calculationBar.innerHTML = `Pokémons ordenados do mais pesado para o mais leve`
    return showPokemon(sizeFilter(allPokemons, "weight", selectOrder.value))
  }
}

function searchByName() {
  if (inputName.value !== "") {
    calculationBar.innerHTML = `Busca por nome...`
  } else if (inputName.value == "") {
    calculationBar.innerHTML = `Você está vendo todos os Pokémons!`
  }
  return showPokemon(searchName(allPokemons, inputName.value.toLowerCase()))
}

function cleanFilters() {
  showPokemon(allPokemons);
  selectType.value = "";
  selectRarity.value = "";
  selectRegion.value = "";
  selectOrder.value = "";
  inputName.value = "";
  calculationBar.innerHTML = `Você está vendo todos os Pokémons!`
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

showPokemon(allPokemons);
selectType.addEventListener('change', searchByType);
selectRarity.addEventListener('change', searchByRarity);
selectRegion.addEventListener('change', searchByRegion);
selectOrder.addEventListener('change', searchByOrderAlphabetical);
selectOrder.addEventListener('change', searchByHeightOrder);
selectOrder.addEventListener('change', searchByWeightOrder);
inputName.addEventListener('input', searchByName);
clearButton.addEventListener('click', cleanFilters);
buttonTop.addEventListener('click', scrollToTop)