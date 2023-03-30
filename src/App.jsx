import './App.css'
import PokemonCard from './components/PokemonCard';
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
        
        const handlePrevious = () => {
            setPokemonIndex(pokemonIndex>0? pokemonIndex- 1: pokemonIndex);
            
        };
        
        const handleNext = () => {
            setPokemonIndex(pokemonIndex< pokemonList.length - 1? pokemonIndex + 1: pokemonIndex);
            
        };
        return (


        <div>
            <PokemonCard pokemon={ pokemonList[pokemonIndex]}/>
            <button onClick={handlePrevious}>précédent</button>
            <button onClick={handleNext}>suivant </button>
        </div>
    );




};
export default App
