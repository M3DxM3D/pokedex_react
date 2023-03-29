import styles from './PokemonCard.module.css'


function PokemonCard() {
    let pokemon = pokemonList[1]
     
return (

    <div> {pokemon.imgSrc ?
        
        <figure className={styles.card}>

            <img src={  pokemon.imgSrc }  alt={ pokemon.name } className={styles.cardImg}  />
            <figcaption>{pokemon.name}</figcaption> 

        </figure>
        
        : 
        <figure className={styles.card}>
    <p>???</p>
    <figcaption>{pokemon.name}</figcaption>
    </figure>
    } 
    
    
    </div>


)

};


const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    }, {
        name: "mew"
    },
];



export default PokemonCard;
