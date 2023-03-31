import './App.css'
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';
import {useState} from 'react';
import PropTypes from "prop-types";



PokemonCard.propTypes = {
    
    pokemon: PropTypes.shape(
        {name: PropTypes.string.isRequired, imgSrc: PropTypes.string}
        ).isRequired
        
    };
    
    
    
    const pokemonList = [
        {
            name: "bulbasaur",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        },
        {
            name: "charmander",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        },
        {
            name: "squirtle",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        },
        {
            name: "pikachu",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        }, {
            name: "mew"
        },
    ];
    
    function App() {
        
        
        const [pokemonIndex, setPokemonIndex] = useState(0);
        
         return (
                       
        <>
        <PokemonCard pokemon={ pokemonList[pokemonIndex]}/> 
        <NavBar pokeIndex = {pokemonIndex} setPokeIndex = {setPokemonIndex} pokeList={pokemonList} />
        </>
    );




};
export default App
