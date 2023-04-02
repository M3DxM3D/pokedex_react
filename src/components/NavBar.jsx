import PokemonCard from "./PokemonCard"

function NavBar({pokeIndex, setPokeIndex, pokeList}) {


        const handlePrevious = () => {
            setPokeIndex(pokeIndex - 1)

        }
        const handleNext = () => {
            setPokeIndex(pokeIndex + 1)
        }

      
        pokeList[pokeIndex] === pokeList[3] && alert('pika pikachu !!!') ;

        const handlePokemonClick = (index) => {
              setPokeIndex(index);
    };
        return (
            
            <>
            {pokeList.map((pokemon, index) => (
          <button key={index} onClick={() => handlePokemonClick(index)}>
            {pokemon.name}
          </button>
        ))}
            
          {/* { pokeIndex > 0 && <button onClick={handlePrevious}>précédent</button>} 
          {pokeIndex < pokeList.length - 1 && <button onClick={handleNext}>suivant</button>}
       */}
      </>
      
        )

    
}

export default NavBar
