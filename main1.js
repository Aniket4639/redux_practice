const poke_container=document.getElementById('poke_container');
const pokemons_number=6;


const fetchpokemons= async () => {
    for(let i=1; i<=pokemons_number; i++){
        await getPokemon(i);
    }
}
const getPokemon =async id =>{
const url=`https://jsonplaceholder.typicode.com/posts`;
const res=await fetch(url);
const pokemon=await res.json();
console.log(pokemon);
createPokemonCard(pokemon);
}

const createPokemonCard =pokemon =>{
    const pokemonE1=document.createElement('div');
    //console.log(poke_container);
    pokemonE1.classList.add('pokemon');
    const pokeInnerHTML=`${pokemon[0].id} ${pokemon[0].title}  ${pokemon[0].userId}`;
    pokemonE1.innerHTML=pokeInnerHTML;
    poke_container.appendChild(pokemonE1);
}
fetchpokemons();