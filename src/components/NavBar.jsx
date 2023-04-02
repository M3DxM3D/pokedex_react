import PokemonCard from "./PokemonCard"

function NavBar({pokeIndex, setPokeIndex, pokeList}) {


        const handlePrevious = () => {
            setPokeIndex(pokeIndex - 1)

        }
        const handleNext = () => {
            setPokeIndex(pokeIndex + 1)
        }

        
        
        return(
          
        <>
          { pokeIndex > 0 && <button onClick={handlePrevious}>précédent</button>} 
          {pokeIndex < pokeList.length - 1 && <button onClick={handleNext}>suivant</button>}
      
      </>

    )
}

export default NavBar
